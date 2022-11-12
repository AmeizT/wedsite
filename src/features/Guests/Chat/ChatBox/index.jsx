import React from "react"
import { toast } from 'react-toastify'
import { BiSend, BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { createPost, fetchPosts } from "../../../../context/slices/guests"
import { Button, CharField, Container, Drawer, Form, Icon, Item, Segment, Stack, TextField } from "../../../../@fastor"

export default function ChatBox({ newChat, setNewChat }){
    const dispatch = useDispatch()
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
    })

    const { created, loading } = useSelector(state => state.guests)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formData.name.length === 0 || formData.description.length === 0){
            toast("All fields are required")
        } else {
            const post = JSON.stringify({
                name: formData.name,
                description: formData.description,
            })
            dispatch(createPost(post))
            setFormData({
                name: '',
                description: '',
            })
        }
    }

    function handleChange(e){
        const names = e.target.name
        const value = e.target.value
        setFormData(values => ({...values, [names]: value}))
    }

    React.useEffect(() => {
        if(created){
            toast("Request sent successfully. Refresh after 10s to view post.")
            const timer = setTimeout(() => {
                dispatch(fetchPosts())
                setNewChat(!newChat)
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [created, dispatch, newChat, setNewChat])

    return (
        <Drawer zx="2000" bg="var(--snow10)" bgd="var(--dark70)">
            <Form h="100%" $dir="vrt" pt="calc(var(--h10) + var(--s10))" onSubmit={handleSubmit}>
                <Segment h="var(--h10)" pos="fxd" $top="0" pv="center" line="base" space="0 var(--s10)">
                    <Item>
                        <Button
                        rad="50px"
                        space="var(--s5)"
                        bg="var(--sage)"
                        onClick={() => setNewChat(!newChat)}>
                            <Icon size={24} hex="var(--snow10)"><BiArrowBack /></Icon>
                        </Button>
                    </Item>
                    
                    <Item h="fit">
                        <Button 
                        type="submit"
                        rad="var(--s10)"
                        space="var(--s5) var(--s10)"
                        hex="var(--snow10)"
                        bg="var(--sage)" 
                        gutter="0 0 0 auto">
                            Send
                        </Button>
                    </Item>
                </Segment>

                <Segment $dir="vrt" space="0 var(--s10)">
                    <Stack>
                        <Item 
                        rad="var(--s10)"
                        bg="var(--snow20)"
                        bgd="var(--dark60)">
                            <TextField
                            name="description"
                            value={formData.description} 
                            space="var(--s10)"
                            rows="6"
                            faker="What's your request?"
                            onChange={handleChange} />
                        </Item>
                    </Stack>

                    <Stack 
                    mt="var(--s10)" 
                    rad="var(--s10)"
                    bg="var(--snow20)" 
                    bgd="var(--dark60)">
                        <Item
                        w="fit">
                            <CharField
                            space="var(--s10) var(--s10)"
                            faker="Name"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleChange} />
                        </Item>
                    </Stack>
                </Segment>
            </Form>
        </Drawer>
    )
}