import Image from "next/image"
import VenueMap from '../../../components/Map'
import {
    Button,
    Card,
    Container,
    Headtext,
    imageLoader,
    Item,
    Icon,
    Lead,
    List,
    ListItem,
    Stack,
    View,
} from "../../../@fastor";
import { 
    MdOutlineColorLens, 
    MdOutlineNotifications, 
    MdEventNote } 
from "react-icons/md"
import { 
    RiRestaurantLine, 
    RiRestaurant2Fill,
    RiMapPinLine 
} from "react-icons/ri"
import { VscWatch } from "react-icons/vsc"
import { BsSmartwatch } from "react-icons/bs"
import { BiGift } from "react-icons/bi"
import { TbBellRinging, TbBell, TbMapPin } from "react-icons/tb"
import { GiLargeDress } from "react-icons/gi"


export default function InfoCard({ info, children }){
    return (
        <Card rad="var(--s10)" mt="var(--s10)" space="var(--s10) 0" px="center" bg="var(--snow20)" bgd="var(--dark60)">
            <Container $dir="vrt">
                <Stack $dir="vrt" space="var(--size50) 0">
                    <Item pv="center">
                        <Button rad="50px" space="10px" iconHex="var(--dark40)" iconHexd="var(--gray10)" bg="var(--snow10)" bgd="var(--dark50)" shadow="var(--shadow)">
                            <Icon size={24}>
                                {info.title === "Venue" ? <RiMapPinLine /> :
                                info.title === "Preferred Attires" ? <GiLargeDress /> :
                                info.title === "Gifts Suggestion" ? <BiGift /> :
                                info.title === "Program" ? <BsSmartwatch /> :
                                info.title === "Our Theme" ? <MdOutlineColorLens /> :
                                info.title === "Food Menu" ? <RiRestaurant2Fill /> :
                                info.title === "Notes" && <MdEventNote />
                                }
                            </Icon>
                        </Button>

                        <Headtext as="h3" ps="var(--s7)" variant={6} fs={20}>
                            {info.title}
                        </Headtext>
                    </Item>

                    <List $dir="vrt">
                        {info.content.map(content => (
                            <ListItem key={content._id} w="100%" space="10px 0">
                                <Item $dir="vrt">
                                    {content?.name && 
                                        <Lead fs={14} variant={5}>
                                            {content?.name}
                                        </Lead>
                                    }

                                    {content?.description && 
                                        <Lead pt="var(--s2)" fs={14} leading="20px" muted={true}>
                                            {content?.description}
                                        </Lead>
                                    }
                                </Item>
                            </ListItem>
                        ))}
                    </List>

                    {info.title === "Venue" &&
                        <VenueMap />
                    }

                    {info.title === "Our Theme" && 
                        <Item>
                            <Image 
                            src="/theme-preview.png" 
                            alt="wedding theme" 
                            width={500} 
                            height={500} 
                            loader={imageLoader} />
                        </Item>
                    }
                </Stack>
                {children}
            </Container>
        </Card>
    )
}