import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: [],
    loading: false,
    error: {},
}

export const fetchInfo = createAsyncThunk('info/fetchInfo', () => {
    const pathname = process.env.NEXT_PUBLIC_ENV === 'production' ? 
    'https://tayem.vercel.app/api/info' : 'http://localhost:3000/api/info'

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

const infoSlice = createSlice({
    name: 'info',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchInfo.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchInfo.fulfilled, (state, action) => {
            state.loading = false
            state.info = action.payload
        })
        .addCase(fetchInfo.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
            state.info = []
        })
    }
})

export default infoSlice.reducer


