import React from 'react'
import { Meta } from "../../src/@fastor"
import Info from '../../src/features/Info'
import { client } from "../../sanity"
import { fetchInfo } from "../../src/context/slices/info"
import { useDispatch, useSelector } from "react-redux"

export default function InfoCentre(){
    const dispatch = useDispatch()
    const { info } = useSelector(state => state.info)
    
    React.useEffect(() => {
        dispatch(fetchInfo())
    }, [dispatch])

    return (
        <React.Fragment>
            <Meta title="Info Centre" />
            <Info info={info} />
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const data = `*[ _type == "info"] | order(_createdAt asc)`
    const info = await client.fetch(data)

    if (!info) {
        return {
            props: {
                info: [],
                notFound: true,
            }
        }
    } else {
        return { 
            props: {
                info
            },
        }
    }
}