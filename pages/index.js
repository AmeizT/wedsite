import React from 'react'
import { Meta } from '../src/@fastor'
import Home from "../src/features/Home"
import { client } from "../sanity"

export default function Main({ stories }){
    return (
        <React.Fragment>
            <Meta />
            <Home stories={stories} />
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const data = `*[ _type == "stories"] | order(_createdAt asc)`
    const stories = await client.fetch(data)

    if (!stories) {
        return {
            props: {
                stories: [],
                notFound: true,
            }
        }
    } else {
        return { 
            props: {
                stories
            },
        }
    }
}