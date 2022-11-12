import {client} from "../../../sanity"

export default async function handler(req, res) {
    const guest = req.body

    if(req.method === 'PUT'){
        try {
            await client
            .patch(guest.id)
            .set({ phone: guest.phone, rsvp: guest.rsvp, diet: guest.diet }) 
            .commit() 
            .then((res) => { 
                console.log('RSVP updated!') 
            })
            .catch((err) => {
                console.error('Oh no, the update failed: ', err.message)
            })
            res.status(200).end()
        } catch(err){
            console.log(err);
            res.status(err).json()
        }
    } else {
        res.status(405)
        res.end()
    }
}
