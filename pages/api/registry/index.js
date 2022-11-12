import { client } from '../../../sanity'

export default async function handler(req, res) {
    if(req.method === 'GET'){
        try {
            const query = `*[ _type == "guests"]` 
            const posts = await client.fetch(query)
            
            res.status(200).json(posts)

        } catch(err) {
            res.json(err)
            res.status(405).end()
        }
    } else {
        res.status(405)
        res.end()
    }
}


