import React from 'react'
import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-toastify'
import { TbLock } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../context/slices/guests'
import { Backdrop, Button, CharField, Container, Drawer, Headtext, Icon, Item, Meta, Segment, Stack, Text, Tiny } from "../../@fastor"

export default function Logger(){
    const dispatch = useDispatch()
    const [inputPasscode, setInputPasscode] = React.useState()
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    function handleChange(e){
        setInputPasscode(e.target.value)
    }

    function checkPasscode(){
        if(inputPasscode === process.env.NEXT_PUBLIC_PASSCODE){
            sessionStorage.token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
            dispatch(checkAuth())
        } else {
            sessionStorage.removeItem("token")
            toast('Wrong passcode')
        }
    }

    return (
        <React.Fragment>
            <Meta />
            <Drawer>
                <Item view="BLK" pos="rtv">
                    <Image
                    src="/engagement/us4.jpg"
                    alt="ruva"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    loader={loader} />
                </Item>

                <Backdrop pv="center" variant="dark" backdrop="mirror">
                    <Container>
                        <Stack $dir="vrt">
                            <Item px="center">
                                <Icon size={40} hex="var(--snow10)">
                                    <TbLock />
                                </Icon>
                            </Item>

                            <Item mt="var(--s20)" px="center">
                                <Headtext as="h5" hex="var(--snow10)" variant={6} fs={20}>
                                    Enter passcode
                                </Headtext>
                            </Item>

                            <Item px="center" mt="var(--s20)">
                                <CharField 
                                w="fit"
                                type="number"
                                space="var(--s7) var(--s15)"
                                fakerHex="white"
                                value={inputPasscode} 
                                rad="var(--s10)"
                                focus="contained"
                                border="2px solid var(--snow10)"
                                hex="var(--snow20)"
                                onChange={handleChange} />
                            </Item>

                            <Item px="center" mt="var(--s10)">
                                <Tiny dist="center" fs={12} hex="var(--snow10)">
                                    Keep the passcode private.
                                </Tiny>
                            </Item>

                            <Item px="center" mt="var(--s20)">
                                <Button
                                rad="var(--s10)" 
                                fs={14}
                                variant={7}
                                bg="var(--snow10)"
                                onClick={() => checkPasscode()}>
                                    Login
                                </Button>
                            </Item>
                        </Stack>
                    </Container>
                </Backdrop>
            </Drawer>
        </React.Fragment>
    )
}