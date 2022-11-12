import { GoStop } from "react-icons/go"
import { Box, Container, Headtext, Icon, Item, Stack, Text } from "../../@fastor"

export default function Desktop(){
    return (
        <Box viewFor="cp" h="100vh" pv="center">
            <Container>
                <Stack $dir="vrt" pv="center">
                    <Item w="fit" space="var(--s20) 0">
                        <Icon size="60" hex="var(--firebrick)"><GoStop /></Icon>
                    </Item>

                    <Item w="fit">
                        <Headtext as="h4" fs={24} dist="center">
                            For a better user experience, <br />we suggest that you open this app on a smartphone.
                        </Headtext>
                    </Item>
                </Stack>
            </Container>
        </Box>
    )
}