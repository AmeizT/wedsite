import { Container, Headtext, Item, Sector, Stack, Text } from "../../@fastor"
import { IconContext } from "react-icons"
import { GiKiwiBird } from 'react-icons/gi'

export default function PhotoBooth(){
    return (
        <Sector h="100vh" pv="center">
            <Container>
                <Stack $dir="vrt">
                    <Item px="center" view="none">
                        <Headtext dist="center">
                            Roora & Wedding Photos
                        </Headtext>
                    </Item>

                    <Item pt="var(--s20)" px="center">
                        <IconContext.Provider value={{ size: 80, color: "var(--dark40)" }}>
                            <GiKiwiBird />
                        </IconContext.Provider>
                    </Item>

                    <Item $dir="vrt" mt={3} px="center">
                        <Headtext as="h3" fs="28px" variant={4} dist="center">
                            You&apos;re here so early. 
                        </Headtext>

                        <Text pt="var(--s5)" fs={20} dist="center" muted={true} leading="1.3">
                            Hate to disappoint you early bird but the roora & wedding photos will be uploaded on Oct. 1, 2022.
                        </Text>
                    </Item>
                </Stack>
            </Container>
        </Sector>
    )
}