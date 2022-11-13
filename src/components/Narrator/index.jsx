import Image from "next/image"
import { urlFor } from "../../../sanity"
import { MdClose } from "react-icons/md"
import BlockContent from '@sanity/block-content-to-react'
import PortableText from "react-portable-text";
import { Button, Card, Container, Drawer, Headtext, Icon, Item, Segment, Tiny } from "../../@fastor"

export default function Narrator({ read, setRead, stories }){
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <Drawer 
        className={read ? "appear" : "disappear"} 
        zx="2000" 
        oy="scroll" 
        bgd="var(--dark70)">
            <Container $dir="vrt" space="var(--s10)">
                <Segment h="var(--h10)" pos="fxd" pv="start" space="0 var(--s10)" zx="2001" start="0">
                    <Item h="fit">
                        <Button rad="50px" space="var(--s5)" bg="#5ca37edb" onClick={() => setRead(false)}>
                            <Icon size={24} hex="var(--snow10)"><MdClose /></Icon>
                        </Button>
                    </Item>
                </Segment>

                {stories && stories.filter(story => story.published === true).map(story => (
                    <Card 
                    key={story._id} 
                    as="article" 
                    $dir="vrt" 
                    pb="var(--s20)"
                    line="base"
                    aria-posinset={story._id} 
                    aria-setsize="-1"  
                    aria-label={story._id}
                    aria-labelledby={story.title}>
                        <Container $dir="vrt" space="0">
                            {story.image && story.image !== null &&
                                <Segment h="320px" view="block" pos="rtv" imgRad="var(--s10)">
                                    <Image 
                                    src={urlFor(story.image).url()}
                                    alt={story.caption}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                    loader={loader} />
                                </Segment>
                            }

                            <Segment $dir="vrt" space="var(--s10) 0">
                                <Headtext fs={24}>{story.title}</Headtext>
                                <Tiny fs={14} muted={true}>Narrated by {story.author}</Tiny>
                            </Segment>

                            {story.content && 
                                <Segment>
                                    <PortableText content={story.content} />
                                </Segment>
                            }
                        </Container>
                    </Card>
                ))}
            </Container>
        </Drawer>
    )
}