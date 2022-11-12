import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import { Item, Sector } from "../../../@fastor";

export default function Booth({ booth, imageSize }){
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <Sector 
        view="grid" 
        gtc="repeat(2, 1fr)" 
        gar="120px"
        space=".5rem" 
        gap=".5rem">
            {booth.map(booth => (
                <Item 
                key={booth.id} 
                view="BLK" 
                pos="rtv" 
                v={booth?.span} 
                shadow="var(--shadow)">
                    <Image
                    src={booth.image}
                    alt="Tayemu"
                    layout="fill"
                    loader={loader} />
                </Item>
            ))}
        </Sector>
    )
}

Booth.defaultProps = {
    booth: [
        { id: uuid(), image: '/engagement/us5.jpg', span: 'span 2 / auto', },
        { id: uuid(), image: '/engagement/usw1.jpg' },
        { id: uuid(), image: '/engagement/us2.jpg', span: 'span 2 / auto' },
        { id: uuid(), image: '/engagement/us3.jpg', span: 'span 2 / auto' },
        { id: uuid(), image: '/engagement/usw2.jpg' },
        { id: uuid(), image: '/engagement/usw3.jpg' },
        { id: uuid(), image: '/engagement/usw4.jpg' },
    ],
    imageSize: '100px',

}