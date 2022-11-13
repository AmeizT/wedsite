import Image from 'next/image'
import { Box, Container, Headtext, Item, Sector, Segment, Stack, Text, Lead } from '../../../@fastor'
import Proposal from '../../../components/Proposal'

export default function Invitation(){
    return (
        <Sector space="var(--h30) 0" pv="center">
            <Container $dir="vrt" pv="center">
                <Item $dir="vrt" pb="var(--s30)" px="center">
                    <Headtext fs="34px" variant={4} dist="center">
                        Save the date <br />
                        for our wedding.
                    </Headtext>

                    <Text ff="backup" variant={4} pt="10px" fs={18} dist="center" leading="28px" muted={true}>
                        We are delighted to invite you to our wedding celebration. It will be intimate, cozy & full of love. Get ready for a day of joy, food, good music & dancing.
                    </Text>
                </Item>

                <Box 
                w="320px" 
                h="320px" 
                rad="circle" 
                cover="url('/engagement/us.jpg')"
                repeat="no-repeat"
                $size="cover"
                bgPos="center center" />

                <Stack w="fit" pt="var(--s30)" px="center">
                    <Text prefs="upper" leading="24px" fs={16} dist="center" variant={7} tracking="0.20ex" muted={true}>
                        {process.env.NEXT_PUBLIC_DATE || "Dec 31, 2023"} <br /> Blue Ridge Farm
                    </Text>
                </Stack>

                <Proposal />
            </Container>
        </Sector>
    )
}