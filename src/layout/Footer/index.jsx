import React from "react"
import Link from 'next/link'
import Router from 'next/router'
import { v4 as uuid } from 'uuid'
import Spotify from '../../components/Spotify'
import { RiWhatsappLine } from 'react-icons/ri'
import { Button, Container, Icon, Item, Headtext, NavLink, Segment, Stack, TaskBar, Text, Time, Tiny } from '../../@fastor'
import { Vercel } from "../../assets/svg/vercel"

export default function Footer({ dev, contacts }){
    const [height, setHeight] = React.useState(0)
    const contentRef = React.useRef(null)

    React.useEffect(() => {
        setHeight(`${contentRef.current.scrollHeight}px`);
    }, [setHeight])

    function handleRSVP(id){
        contacts.forEach((contact) => {
            if(id === contact.id){
                Router.push(`${contact.action}`)
            }
        })
    }

    return (
        <TaskBar $dir="vrt" space="0" bg="var(--dark90)">
            <Spotify />

            <Segment 
            mh={`calc(${height} + var(--s20))`}
            pos="rtv"
            space="0 var(--s10) var(--s20)" 
            cover="url('/patt-g.jpg')" 
            repeat="no-repeat"
            $size="cover"
            bg="var(--dark90)">
                <Container w="calc(100% - 2.5rem)" h="100%" pos="abs" $end="0" $top="-2.5rem" pv="center" bg="var(--dark80)">
                    <Stack $dir="vrt" ref={contentRef}>
                        <Item $dir="vrt" space="0 0 var(--s20)" bb="1px solid var(--dark40)">
                            <Headtext as="h4" fs="24px" variant={7} hex="var(--sage)">
                                #AndrewKira<br/>#WeddingDay
                            </Headtext>
                            <br/>
                            <Text ff="Handlee, Inter, Segoe UI, sans-serif" fs={16} variant={4} leading="20px" muted={true}>
                                Hello family & friends, <br /> <br/>We are really grateful for all the support rendered to us so far. Please continue to support and pray for us as we prepare to celebrate this amazing day together and make sure to rsvp before Dec 14, 2022.<br /> <br />To RSVP, please go to the Guests page and follow the instructions written there.<br/><br/>Kind regards,<br/><br />Andrew & Kira!
                            </Text>
                        </Item>

                        <Item space="var(--s20) 0">
                            <Headtext as="h4" fs="24px" variant={7} hex="var(--sage)">
                                For any inquiries or special dietary & music requests.
                            </Headtext>
                        </Item>

                        <Item pt="var(--s10)" gap="var(--s10)">
                            {contacts.map(contact => (
                                <Button 
                                key={contact.id}
                                rad="var(--s5)" 
                                fs={16}
                                variant={6}
                                space="14px 24px"
                                hex="var(--sage)"
                                bg="var(--dark60)"
                                onClick={() => handleRSVP(contact.id)}>
                                    {contact.name}
                                    &nbsp;<Icon size={20} color="var(--euca)"><RiWhatsappLine /></Icon>
                                </Button>
                            ))}
                        </Item>

                        <Item $dir="vrt" pt="var(--s20)">
                            <Tiny view="BLK" pt="10px" fs={14} variant={6} hex="var(--sage)">
                                Crafted by &nbsp;<Link href={dev} passHref>
                                    <NavLink hex="var(--sagebrush)" prefs="underline">Ameiz T. (Selta Digital Studio)</NavLink>
                                </Link>
                            </Tiny>

                            <Tiny fs={14} hex="var(--sage)">&copy; <Time datetime={new Date()}>
                                {new Date().getFullYear()}</Time>&nbsp;Andrew & Kira. All rights reserved.
                            </Tiny>
                        </Item>

                        <Item pv="center" pt="4px">
                            <Tiny fs={14} hex="var(--sage)" leading="1">
                                Deployed on &nbsp;<Vercel />
                            </Tiny>
                        </Item>
                    </Stack>
                </Container>
            </Segment>
        </TaskBar>
    )
}

Footer.defaultProps = {
    dev: 'https://twitter.com/seltadigital',
    contacts: [
        {
            id: uuid(),
            name: "Andrew",
            action: `https://wa.me/2677700000?text=${encodeURIComponent(
                `Hi Tawanda,\n\nI have an enquiry and may you please assist?\n\nThanks!`
            )}`,
        },

        {
            id: uuid(),
            name: "Kira",
            action: `https://wa.me/26777000?text=${encodeURIComponent(
                `Hi Yemurai,\n\nI have an enquiry and may you please assist?\n\nThanks!`
            )}`,
        },
    ],
}