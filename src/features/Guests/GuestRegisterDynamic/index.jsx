import React from 'react'
import { v4 as uuid } from 'uuid'
import Assigner from '../Assigner'
import GuestCard from '../GuestCard'
import GuestList from '../GuestList'
import GuestChart from "../Chart"
import { Button, Container, Headtext, Icon, Item, Lead, List, ListItem, Segment, Stack, Sup, View } from '../../../@fastor'
import { MdClose, MdInfo, MdBubbleChart, MdBarChart } from 'react-icons/md'

export default function GuestRegister({ guests }){
    const [notify, setNotify] = React.useState(true)
    const [chart, setChart] = React.useState(false)
    const [team, setTeam] = React.useState('')
    const [relatedTo, setRelatedTo] = React.useState('unassigned')

    const groom = guests && guests.filter(guest => guest.aff === 'groom')
    const bride = guests && guests.filter(guest => guest.aff === 'bride')
    const friend = guests && guests.filter(guest => guest.aff === 'friend')
 
    const groomChartData = [
        groom.filter(guest => guest.rsvp === "accept").length, 
        groom.filter(guest => guest.rsvp === "decline").length, 
        groom.filter(guest => guest.rsvp !== "decline" && guest.rsvp !== "accept").length]

    const brideChartData = [
        bride.filter(guest => guest.rsvp === "accept").length, 
        bride.filter(guest => guest.rsvp === "decline").length, 
        bride.filter(guest => guest.rsvp !== "decline" && guest.rsvp !== "accept").length
    ]

    const friendChartData = [
        friend.filter(guest => guest.rsvp === "accept").length, 
        friend.filter(guest => guest.rsvp === "decline").length, 
        friend.filter(guest => guest.rsvp !== "decline" && guest.rsvp !== "accept").length
    ]

    React.useEffect(() => {
        const hiddenNote = localStorage.getItem("hideNote")
        if(hiddenNote && hiddenNote === 'hidden'){
            setNotify(hiddenNote)
        }
    }, [])

    function hideNotify(){
        if(notify === true){
            localStorage.hideNote = "hidden"
            return setNotify('hidden')
        }
    }

    function handleChart(){
        if(relatedTo === "groom"){
            setTeam("Groom")
        } else if(relatedTo === "bride"){
            setTeam("Bride")
        } else if(relatedTo === "friend"){
            setTeam("Friend")
        }
        setChart(true)
    }

    function handleBrideChart(){
        setTeam("Bride")
        setChart(true)
    }

    function handleFriendChart(){
        setTeam("Friend")
        setChart(true)
    }

    return (
        <Segment space="var(--h10) 0 0" bgd="var(--dark70)">
            <Container $dir="vrt" pos="rtv" space="0">
                {relatedTo === "groom" || relatedTo === "bride" || relatedTo === "friend" ?
                <GuestList 
                key={uuid()} 
                guests={
                    relatedTo === "groom" ? groom :
                    relatedTo === "bride" ? bride :
                    relatedTo === "friend" && friend }>
                    <Item>
                        <Headtext as="h4">
                            {relatedTo === "groom" ? `Team Groom (Beta) / ${groom.length}` :
                            relatedTo === "bride" ? `Team Bride (Mhofu) / ${bride.length}` :
                            relatedTo === "friend" && `Team Friends (Day Ones) / ${friend.length}`
                            }
                        </Headtext>
                    </Item>

                    <Item w="fit">
                        <Button
                        fs={12}
                        title="groom"
                        rad="10px"
                        space="5px 10px"
                        variant={6}
                        hex="var(--snow10)"
                        bg="var(--sky)" 
                        onClick={handleChart}>
                            <Icon size={16} hex="var(--snow10)">
                                <MdBubbleChart />
                            </Icon>&nbsp;Stats
                        </Button>
                    </Item>
                </GuestList> :

                <Assigner relatedTo={relatedTo} setRelatedTo={setRelatedTo} />}

                {notify !== 'hidden' &&
                <Segment w="fit" pos="abs" $top="220px" $end="0" zx="1" bg="var(--sagebrush)">
                    <Stack $dir="vrt" pos="rev" space="var(--s5) var(--s10) var(--s10)">
                        <Item w="20px" h="20px" pos="abs" $top="-10px" $end=".6rem" bg="var(--sagebrush)" tf="rotate(45deg)" />

                        <Item pb="var(--s5)" pv="center" bb="1px solid var(--snow10)">
                            <Icon size={24} hex="var(--snow10)"><MdInfo /></Icon>
                            &nbsp;<Headtext as="h5" prefs="upper" hex="var(--snow10)" fs={14}>Rsvp Instructions</Headtext>
                        </Item>

                        <Item pt="var(--s5)">
                            <Lead fs={14} hex="var(--snow10)" leading="20px">
                                Tap here to rsvp. Changes may take effect after 30s. Refresh the page to check your rsvp status.
                            </Lead>
                        </Item>

                        <Item pt="var(--s7)" px="end">
                            <Button 
                            fs={12} 
                            rad="var(--s5)"
                            space="8px 12px" 
                            variant={7}  
                            hex="var(--snow10)" 
                            shadow="var(--shadow)"
                            bg="var(--sage)"
                            onClick={hideNotify}>
                                OK, GOTCHA!
                            </Button>
                        </Item>
                    </Stack>
                </Segment>}
            </Container>

            {chart && 
            <GuestChart 
            setChart={setChart}
            name={team}
            chartdata={
                team === 'Groom' ? groomChartData : 
                team === 'Bride' ? brideChartData : 
                team === 'Friend' && friendChartData
            }/>}
        </Segment>
    )
}
