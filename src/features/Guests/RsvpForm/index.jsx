import React from 'react'
import Router from 'next/router'
import {
    Button,
    Container,
    Select,
    CharField,
    Drawer,
    Form,
    Headtext,
    Item,
    Lead,
    Option,
    Radio,
    Stack,
    Tag,
    Text,
    TextField
} from "../../../@fastor";
import { useDispatch, useSelector } from 'react-redux'
import { updateGuest } from '../../../context/slices/guests'
import { toast } from 'react-toastify'
import { Spinner } from '../../../@fastor'
import { IconContext } from 'react-icons'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

export default function RsvpForm({ confirm, setConfirm, guest }){
    const dispatch = useDispatch()
    const { loading, updated } = useSelector(state => state.guests)
    const [error, setError] = React.useState('')
    const [message, setMessage] = React.useState({})
    const [formData, setFormData] = React.useState({
        id: guest.id,
        phone: '',
        rsvp: '',
        music: '',
        diet: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formData.phone.length === 0){
            toast("Phone number is required.")
        } else if(formData.rsvp.length === 0){
            toast("Please select a response.")
        } else {
            const guest = JSON.stringify({
                id: formData.id,
                phone: formData.phone,
                rsvp: formData.rsvp,
                diet: formData.diet,
            })
            dispatch(updateGuest(guest))
        }
    }

    function handleChange(e){
        const names = e.target.name
        const value = e.target.value
        setFormData(values => ({...values, [names]: value}))
    }

    React.useEffect(() => {
        if(updated === true){
            toast("Status updated! Changes may take up to 60s.")
            Router.reload('/guests');
        }

        if(error){
            toast(error)
        }
    }, [updated, error])

    return (
        <Drawer 
        h="auto"
        mh="100vh"
        pos="rtv" 
        space="var(--h10) 0 0"
        zx="2000" 
        cover="url('/rsvp.png')"
        repeat="no-repeat"
        oy="scroll"
        $size="cover"
        bgPos="50% 10%"
        bgd="var(--dark70)">
            <Stack h="var(--h30)" pos="fxd" space="0 var(--s10)" $top="0" pv="center">
                <Item w="fit">
                    <Button 
                    w="40px"
                    h="40px"
                    rad="50px" 
                    space="2px"
                    bg="var(--sage)" 
                    onClick={() => setConfirm(!confirm)}>
                        <IconContext.Provider value={{ size: 24, color: 'var(--snow10)' }}>
                            <MdClose />
                        </IconContext.Provider>
                    </Button>
                </Item>
            </Stack>

            <Form>
                <Container $dir="vrt" pb="var(--h30)">
                    <Stack $dir="vrt" line="base" pb="var(--s10)">
                        <Item $dir="vrt" px="center" pb="var(--s10)">
                            <Headtext as="h3" variant={4} fs="28px" dist="center">
                                RSVP 
                            </Headtext>
                        </Item>

                        <Item px="center">
                            <Text ff="backup" variant={4} fs="20px" hex="var(--sage)" dist="center" leading="24px">
                                A beautiful bride, <br /> A handsome groom, <br />Food, drinks & some bad dance moves.
                            </Text>
                        </Item>

                        <Item px="center" pt="var(--s10)">
                            <Lead fs="20px" pt={3} ff="backup">
                                You in?
                            </Lead>
                        </Item>
                    </Stack>

                    <Stack $dir="vrt">
                        <Item space="var(--s10) 0">
                            <Lead fs="20px" pt={3} ff="backup">
                                {guest.name}
                            </Lead>
                        </Item>

                        <Item $dir="vrt" rad="var(--s2)">
                            <Tag htmlFor="phone" variant={7}>
                                Select your response
                            </Tag>

                            <Select
                            w="100%" 
                            name="rsvp" 
                            inputBorder="base"
                            focus="base"
                            space="var(--s10) 0"
                            value={formData.rsvp} 
                            onChange={handleChange}>
                                <Option selected>--</Option>
                                <Option value="accept">Yes, I&apos;m ready to attack the dance floor.</Option>
                                <Option value="decline">No, and I&apos;ll forever regret this decision.</Option>
                            </Select>
                        </Item>

                        <Item $dir="vrt" mt="var(--s10)">
                            <Tag htmlFor="phone" variant={7}>
                                Phone
                            </Tag>

                            <CharField
                            type="text" 
                            name="phone" 
                            value={formData.phone}
                            faker="263712345678" 
                            inputBorder="base"
                            space="var(--s10) 0"
                            rad="0"
                            required
                            focus="base"
                            onChange={handleChange} />
                        </Item>

                        <Item $dir="vrt" mt="var(--s10)">
                            <Tag htmlFor="diet" variant={7}>
                                Diet Requests
                            </Tag>

                            <TextField
                            type="text" 
                            name="diet" 
                            value={formData.diet}
                            inputBorder="base"
                            space="var(--s10) 0"
                            rad="0"
                            rows="2"
                            required
                            focus="base"
                            onChange={handleChange} />
                        </Item>

                        <Item mt="var(--s10)">
                            <Button 
                            w="100%" 
                            rad="var(--s10)" 
                            space="var(--s10) 0" 
                            $color="var(--snow10)" 
                            bg={loading === true ? 'var(--sagebrush)' : 'var(--sage)'} 
                            type="submit" 
                            onClick={handleSubmit}>
                                {loading === true ? 'Updating...' : 'Rsvp'}
                            </Button>
                        </Item>

                        <Item px="center" mt="var(--s10)">
                            <Lead fs={14} variant={4} dist="center" muted={true}>
                                If you don&apos;t reply by {process.env.NEXT_PUBLIC_RSVP || "Dec 14, 2023"}, <br />bring a sandwich and a chair.
                            </Lead>
                        </Item>
                    </Stack>                    
                </Container>
            </Form>
        </Drawer>
    )
}