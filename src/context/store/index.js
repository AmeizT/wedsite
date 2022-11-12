import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import guestsReducer from '../slices/guests'
import infoReducer from "../slices/info"

const rootReducer = combineReducers({
    guests: guestsReducer,
    info: infoReducer,
})

const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NEXT_PUBLIC_ENV !== 'production',
})

export default store