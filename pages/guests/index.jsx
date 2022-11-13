import React from 'react'
import { client } from '../../sanity'
import { Meta } from '../../src/@fastor'
import GuestRegister from '../../src/features/Guests/GuestRegister'
import GuestRegisterDynamic from "../../src/features/Guests/GuestRegisterDynamic"

export default function Guests({ guests }){
    return (
        <React.Fragment>
            <Meta title="Guests" />
            <GuestRegisterDynamic guests={guests} />
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const data = `*[ _type == "patrons"] | order(name asc)`
    const guests = await client.fetch(data)

    if (!guests) {
        return {
            props: {
                guests: [],
                notFound: true,
            }
        }
    } else {
        return { 
            props: {
                guests
            },
        }
    }
}