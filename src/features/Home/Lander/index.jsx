import React from "react"
import Image from 'next/image'
import { IconContext } from 'react-icons'
import Timer from "../../../components/Timer"
import Narrator from "../../../components/Narrator"
import { RiHeartsFill } from 'react-icons/ri'
import Theme from "../../../components/Theme"
import Fireworks from "../../../components/Fireworks"
import { Backdrop, Button, Container, Headtext, Item, Lead, Sector, Stack, Text } from '../../../@fastor'

export default function Lander({ stories }){
    const [read, setRead] = React.useState(false)
    const [themeNote, setThemeNote] = React.useState(false)
    const [fireworks, setFireworks] = React.useState(false)
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <React.Fragment>
            <Sector h="100vh" pos="rtv">
                <Image
                src="/engagement/couple.jpg"
                alt="Image by @prostooleh on Freepik"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                loader={loader} />

                <Backdrop $dir="vrt" pos="rtv" space="90px 0" px="end" variant="darker">
                    <Theme themeNote={themeNote} setThemeNote={setThemeNote} />

                    <Container $dir="vrt">
                        <Stack $dir="vrt" space="0">
                            <Timer fireworks={fireworks} setFireworks={setFireworks} />

                            <Item $dir="vrt">
                                <Headtext as="h2" fs="2rem" variant={4} dist="center" leading={1} hex="var(--snow10)">
                                    Andrew & Kira
                                </Headtext>

                                <Lead pt="var(--s7)" fs="0.625rem" prefs="upper" tracking="0.20ex" dist="center" hex="var(--snow10)">
                                    Wedding Day / Dec. 31, 2022
                                </Lead>
                            </Item>

                            <Item pt="var(--s20)" px="center">
                                <Button
                                rad="var(--s10)"
                                hex="var(--dark40)"
                                space="14px 24px"
                                fs={16}
                                variant={6}
                                prefs="caps"
                                bg="#ffffffdb"
                                onClick={() => setRead(true)}>
                                    About Andrew & Kira
                                </Button>
                            </Item>
                        </Stack>
                    </Container>
                </Backdrop>
            </Sector>
            
            <Narrator stories={stories} read={read} setRead={setRead} />
        </React.Fragment>
    )
}
