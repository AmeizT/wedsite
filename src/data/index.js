import { v4 as uuid } from 'uuid'

let menu = [
    {
        id: uuid(),
        name: 'Home',
        uri: '/',
    },

    {
        id: uuid(),
        name: 'Guests',
        uri: '/guests',
    },

    {
        id: uuid(),
        name: 'Wedding Party',
        uri: '/wedding-party',
    },

    {
        id: uuid(),
        name: 'Photos',
        uri: '/photos',
    },

    {
        id: uuid(),
        name: 'Info',
        uri: '/info',
    },
]

export function useMenu(){
    return menu
}