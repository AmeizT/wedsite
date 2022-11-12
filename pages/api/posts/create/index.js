import { client } from "../../../../sanity"

export default async function handler(req, res){
    const post = req.body

    if(req.method === "POST"){
        try {
            await client.create({
                _type: "posts",
                name: post.name,
                description: post.description,
            })
            .then((res) => {
                console.log(`posted created, ${res._id}`);
            })
            res.status(200).json({ msg: `post created` })
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Error, check console" });
        }
    } else {
        res.status(405)
        res.end()
    }
}