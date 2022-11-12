import React from "react"
import { Meta } from "../../src/@fastor"
import { client } from "../../sanity"
import { useDispatch, useSelector } from "react-redux"
import GuestChat from "../../src/features/Guests/Chat"
import { fetchPosts } from "../../src/context/slices/guests"

export default function Requests(){
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.guests)

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <React.Fragment>
            <Meta title="Music & Food Requests" />
            <GuestChat posts={posts} />
        </React.Fragment>
    )
}

export const getServerSideProps = async () => {
    const data = `*[ _type == "posts"] | order(_createdAt desc)`
    const posts = await client.fetch(data)

    if (!posts) {
        return {
            props: {
                posts: [],
                notFound: true,
            }
        }
    } else {
        return { 
            props: {
                posts
            },
        }
    }
}