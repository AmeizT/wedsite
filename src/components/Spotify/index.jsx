import Router from "next/router"
import { IconContext } from 'react-icons'
import { RiSpotifyLine, RiSpotifyFill } from 'react-icons/ri'
import { Button, Container, Headtext, Item, Lead, Segment, Stack, Text } from '../../@fastor'

export default function Spotify(){
    return (
        <Segment space="2rem 0 var(--h30)" bg="var(--dark90)">
            <Container>
                <Stack $dir="vrt">
                    <Item px="center" pb="var(--s10)">
                        <IconContext.Provider value={{ size: 80, color: "var(--spotify)" }}>
                            <RiSpotifyFill />
                        </IconContext.Provider>
                    </Item>

                    <Item $dir="vrt" px="center">
                      <Headtext
                      as="h4"
                      fs="36px"
                      variant={9}
                      dist="center"
                      $color="var(--snow40)">
                        <Lead bg="var(--combo2)" clip="text" $color="transparent">
                          80s, 90s, 2000s.
                        </Lead>{" "}
                        <br />
                        <Lead bg="var(--combo11)" clip="text" $color="transparent">
                          Mixed Genres.{" "}
                        </Lead>{" "}
                        <br />
                        <Lead bg="var(--combo9)" clip="text" $color="transparent">
                          One Playlist.
                        </Lead>
                      </Headtext>

                        <Text
                        dist="center"
                        pt="var(--s20)"
                        fs={20}
                        $color="var(--snow40)"
                        leading={1.5}>
                            Help us to create the best wedding playlist and get ready
                            to showcase your bad dance moves.
                        </Text>
                    </Item>

                    <Item space="var(--s20) 0">
                        <iframe
                        style={{ padding: "12px", borderRadius: "1.5rem" }}
                        src="https://open.spotify.com/embed/playlist/5PVS4ZcQngwQPwdxxWTRrp?utm_source=generator&theme=0"
                        width="100%"
                        height="300"
                        frameBorder=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </Item>

                    <Item space="var(--s10) 0" px="center">
                      <Button
                        rad="var(--s10)"
                        space="12px 24px"
                        fs={16}
                        variant={5}
                        bg="var(--spotify)"
                        onClick={() => Router.push('/requests')}>
                        Music requests &nbsp;
                        <IconContext.Provider value={{ size: 24 }}>
                          <RiSpotifyFill />
                        </IconContext.Provider>
                      </Button>
                    </Item>
                </Stack>
            </Container>
        </Segment>
    );
}