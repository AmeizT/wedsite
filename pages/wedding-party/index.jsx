import React from 'react'
import { client } from '../../sanity'
import { Meta } from '../../src/@fastor'
import WeddingParty from '../../src/features/WeddingParty'

export default function Team({ team }){
    return (
        <React.Fragment>
            <Meta title="Wedding Party" />
            <WeddingParty team={team} />
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const data = `*[ _type == "team"] | order(_createdAt asc)`
    const team = await client.fetch(data)

    if (!team) {
        return {
            props: {
                team: [],
                notFound: true,
            }
        }
    } else {
        return { 
            props: {
                team
            },
        }
    }
}