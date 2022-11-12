import { Container, HeadText, Item, Sector, Stack, Text } from "../../@fastor"
import { IconContext } from "react-icons"
import { GiKiwiBird } from 'react-icons/gi'

export default function GuestRegistry(){
    return (
        <Sector
        ht="100vh"
        posv="center"
        cover="url('/rsvp.png')"
        repeat="no-repeat"
        $size="cover"
        bgPos="50% 10%"
        bgd="var(--dark70)">
            <Container pt="20px">
                <Stack $direction="vrt">
                    <Item $direction="vrt" mt={3} posx="center">
                        <HeadText as="h2" variant={4} fs="60px" pos="center">
                            Registry 
                        </HeadText>

                        <Text pt="30px" fs={18} pos="center" muted={true} leading="28px">
                            Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift, a cash gift would be welcome but not expected. Cash gift envelopes will be available at the venue.
                        </Text>

                        <Text pt="30px" fs={14} pos="center" prefs="underline">
                            Since the newly-weds will go and live together in Botswana soon after the wedding, some gifts will not be allowed into Botswana by Border Control. That&apos;s why cash gifts would make sense. 
                        </Text>
                    </Item>
                </Stack>
            </Container>
        </Sector>
    )
}