import axios from 'axios'
import { verify } from "jsonwebtoken"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    guests: [],
    posts: [],
    loading: false,
    updated: false,
    authenticated: true,
    created: false,
    error: {},
}

let statusCode = 0

export const updateGuest = createAsyncThunk('guests/updateGuest', async (guest) => {
    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://tayem.vercel.app/api/rsvp' : 'http://localhost:3000/api/rsvp'

    try {
        const res = await fetch(pathname, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'https://tayem.vercel.app',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            },
            body: guest,
        })
        statusCode = res.status
    } catch (error) {
        console.log(error)
    } 
})

export const createPost = createAsyncThunk('guests/createPost', async (post) => {
    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://tayem.vercel.app/api/posts/create' : 'http://localhost:3000/api/posts/create'

    try {
        const res = await fetch(pathname, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'https://tayem.vercel.app',
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            },
            body: post,
        })
        statusCode = res.status
    } catch (error) {
        console.log(error)
    } 
})

export const fetchPosts = createAsyncThunk('guests/fetchPosts', () => {
    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://tayem.vercel.app/api/posts' : 'http://localhost:3000/api/posts'

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'https://discava.vercel.app',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        },            
    }

    return axios
    .get(pathname, config)
    .then((response) => response.data)
})

const guestSlice = createSlice({
    name: 'guests',
    initialState,
    reducers: {
        checkAuth: (state) => {
            const token = sessionStorage.getItem("token")
            const secret = process.env.NEXT_PUBLIC_ACCESS_KEY

            if(token && verify(token, secret)){
                state.authenticated = true
            } else {
                state.authenticated = true
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(updateGuest.pending, (state, action) => {
            state.loading = true
        })
        .addCase(updateGuest.fulfilled, (state, action) => {
            if(statusCode === 200){
                state.updated = true,
                state.loading = false
            }
        })
        .addCase(updateGuest.rejected, (state, action) => {
            state.error = action.error.message,
            state.loading = false
        })
        .addCase(createPost.pending, (state, action) => {
            state.loading = true
        })
        .addCase(createPost.fulfilled, (state, action) => {
            if(statusCode === 200){
                state.created = true,
                state.loading = false
            }
        })
        .addCase(createPost.rejected, (state, action) => {
            state.error = action.error.message,
            state.loading = false
        })
        .addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
            state.created = false
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.created = false
            state.loading = false
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
            state.created = false
            state.posts = []
        })
    }
})

export const { checkAuth } = guestSlice.actions

export default guestSlice.reducer


