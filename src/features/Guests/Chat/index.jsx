import React from "react"
import ChatBox from "./ChatBox"
import { RiQuillPenLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { Box, Button, Card, CharField, Container, Headtext, Icon, Item, Lead, Form, RingLoader, Segment, Stack, TextField, timesince, Text, Tiny } from "../../../@fastor"

export default function GuestChat({ posts }){
    const [newChat, setNewChat] = React.useState(false)
    const { loading } = useSelector(state => state.guests)

    return (
        <Box mh="100vh" space="var(--h30) 0 var(--s10)">
            <Container $dir="vrt" pos="rtv">
                <Segment $dir="vrt">
                    <Item space="var(--s10) 0 var(--s20)">
                        <Headtext as="h3" fs={28}>
                            Requests & Chat
                        </Headtext>
                    </Item>

                    {loading && <RingLoader /> }

                    {posts && posts.map(post => (
                        <Card key={post._id} as="article" mb="var(--s10)" rad="var(--s10)" bg="var(--snow20)" bgd="var(--dark60)">
                            <Container space="var(--s10)">
                                <Stack $dir="vrt">
                                    <Item>
                                        <Headtext as="h5" variant={4} fs={14}>
                                            {post.name}
                                        </Headtext>

                                        <Tiny fs={14} gutter="0 0 0 auto" muted={true}>
                                            {timesince(post._createdAt).fromNow()}
                                        </Tiny>
                                    </Item>

                                    <Item pt="var(--s10)">
                                        <Text fs={14}>{post.description}</Text>
                                    </Item>
                                </Stack>
                            </Container>
                        </Card>
                    ))}
                </Segment>

                <Item w="fit" pos="fxd" base="var(--h30)" $end="var(--s10)">
                    <Button
                    rad="var(--s10)"
                    fs={14}
                    space="14px 24px"
                    variant={7}
                    bgg="var(--combo10)" 
                    bg="var(--sagebrush)"
                    hex="var(--snow10)"
                    onClick={() => setNewChat(true)}>
                        <Box w="fit">
                            <Icon size={24} hex="var(--snow10)">
                                <RiQuillPenLine />
                            </Icon>
                        </Box>

                        <Box w="fit" ps="var(--s5)">Request / Chat</Box>
                    </Button>
                </Item>
            </Container>

            {newChat && <ChatBox newChat={newChat} setNewChat={setNewChat} />}
        </Box>
    )
}