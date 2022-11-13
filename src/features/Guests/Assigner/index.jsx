import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import { IconContext } from 'react-icons'
import { HiBadgeCheck } from 'react-icons/hi'
import { Backdrop, Box, Button, Card, Select, Container, Drawer, Headtext, Item, Option, Lead, Segment, Shuffo, Stack, Text } from "../../../@fastor"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import styles from "../../../assets/sass/swiper.module.scss"

export default function Assigner({ actions, relatedTo, setRelatedTo }){
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    function assignGuest(id){
        actions.forEach((action) => {
            if(id === action.id){
                setRelatedTo(action.name)
            }
        })
    }

    function handleChange(e){
        setRelatedTo(e.target.value)
    }

    return (
        <Drawer $dir="vrt" zx="2" bgd="var(--dark70)">
            <Box 
            mh="260px"
            pos="rtv"
            bgg="var(--combo7)"
            bg="var(--snow20)"
            bgd="var(--dark60)">
                <Backdrop h="100%" pv="center" space="var(--h10) 0 0" backdrop="mirror" variant="darker">
                    <Container>
                        <Stack $dir="vrt">
                            <Item $dir="vrt" px="center">
                                <Headtext as="h3" fs="32px" variant={4} hex="var(--snow10)">
                                    Hello, guest!
                                </Headtext>

                                <Text pt="20px" fs={14} leading="24px" hex="var(--snow10)">
                                    Tap any of the pictures below to choose your favorite team. Find your name on the guests list & rsvp. Be sure to rsvp before {process.env.NEXT_PUBLIC_RSV || "Dec 14, 2023"}.
                                </Text>
                            </Item>
                        </Stack>
                    </Container>
                </Backdrop>
            </Box>

            <Container $dir="vrt" space="0 var(--s10) var(--s10)">
                <Item space="var(--s10) 0 var(--s20)">
                    <Headtext variant={4}>
                        Swipe & choose your favorite team.
                    </Headtext>
                </Item>

                <Shuffo 
                view="none" 
                gtc={`repeat(${actions.length}, minmax(255px, 1fr))`} 
                gap="var(--s10)"
                ox="scroll">
                    {actions.map(action => (
                        <Card as="article" key={action.id} rad="var(--s10)" snap="start" bg="var(--snow20)"
                        bgd="var(--dark60)">
                            <Button 
                            w="100%"
                            rad="0"
                            space="var(--s10)" 
                            hex="var(--dark40)"
                            hexd="var(--snow20)"
                            onClick={() => assignGuest(action.id)}>
                                <Stack $dir="vrt" gap="var(--s5)">
                                    <Item 
                                    view="BLK"
                                    h="220px"
                                    pos="rtv"
                                    imgRad="var(--s5)">
                                        <Image 
                                        src={action.image} 
                                        alt={action.name} 
                                        layout="fill" 
                                        objectPosition={action.position}
                                        objectFit="cover" 
                                        loader={loader}
                                        priority />
                                    </Item>

                                    <Item $dir="vrt" space="var(--s5) 0">
                                        <Headtext as="h3" fs={20} prefs="caps" dist="start" variant={7}>
                                            Team {action.name === "friend" ? `${action.name}s` : action.name}
                                        </Headtext>

                                        <Lead pt="var(--s2)" fs={14} dist="start" variant={7} muted={true}>
                                            {action.phrase}
                                        </Lead>
                                    </Item>
                                </Stack>
                            </Button>
                        </Card>
                    ))}
                </Shuffo>

                <Segment viewFor="ph" className={styles.swiperContainer} pb="var(--sz80)">
                    <Swiper 
                    classNmae={styles.swiper}
                    slidesPerView={1.2}
                    loop={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    spaceBetween={16}>
                        {actions.map(action => (
                            <SwiperSlide key={action.id}>
                                    <Card as="article" rad="var(--s10)" snap="start" bg="var(--snow20)"
                                    bgd="var(--dark60)">
                                        <Button 
                                        w="100%"
                                        rad="0"
                                        space="var(--s10)" 
                                        hex="var(--dark40)"
                                        hexd="var(--snow20)"
                                        onClick={() => assignGuest(action.id)}>
                                            <Stack $dir="vrt" gap="var(--s5)">
                                                <Item 
                                                view="BLK"
                                                h="220px"
                                                pos="rtv"
                                                imgRad="var(--s5)">
                                                    <Image 
                                                    src={action.image} 
                                                    alt={action.name} 
                                                    layout="fill" 
                                                    objectPosition={action.position}
                                                    objectFit="cover" 
                                                    loader={loader}
                                                    priority />
                                                </Item>

                                                <Item $dir="vrt" space="var(--s5) 0">
                                                    <Headtext as="h3" fs={20} prefs="caps" dist="start" variant={7}>
                                                        Team {action.name === "friend" ? `${action.name}s` : action.name}
                                                    </Headtext>

                                                    <Lead pt="var(--s2)" fs={14} dist="start" variant={7} muted={true}>
                                                        {action.phrase}
                                                    </Lead>
                                                </Item>
                                            </Stack>
                                        </Button>
                                    </Card>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Segment>

                <Item view="none" mt="var(--s20)" rad="var(--s10)" space="0 var(--s7)" px="center" line="contained">
                    <Select 
                    w="100%" 
                    space="var(--s10) 0"
                    value={relatedTo} 
                    onChange={handleChange}>
                        <Option defaultValue>--Select your team--</Option>
                        {actions.map(action => (
                            <Option
                            key={action.id}
                            rad="round"
                            fs={14}
                            value={action.name}>
                                {action.phrase}
                            </Option>
                        ))}
                    </Select>
                </Item>
            </Container>
        </Drawer>
    )
}

Assigner.defaultProps = {
    actions: [
        {
            id: uuid(),
            name: 'groom',
            phrase: "Related to the groom.",
            brand: '#5ca37e',
            image: '/engagement/couple.jpg',
            position: 'center',
        },

        {
            id: uuid(),
            name: 'bride',
            phrase: "Related to the bride.",
            brand: '#b1bca0',
            image: '/engagement/bride.jpg',
            position: 'top center',
        },

        {
            id: uuid(),
            name: 'friend',
            phrase: "Friends of the bride & groom.",
            brand: '#9ca89e',
            image: '/engagement/us.jpg',
            position: 'center center',
        },
    ]
}
