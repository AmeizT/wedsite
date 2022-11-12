import Image from 'next/image'
import { urlFor } from '../../../sanity'
import { Box, Card, Container, Headtext, Lead, Segment, Stack, Item, Text } from '../../@fastor'


export default function WeddingParty({ team }){
    const loader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

    return (
        <Box $dir="vrt" space="var(--h10) var(--s10) var(--s10)">
            <Segment space="var(--s20) 0">
                <Headtext fs={28}>Meet the Wedding Party</Headtext>
            </Segment>

            {team && team.map((team, i) => (
                <Card 
                key={i} 
                $dir="vrt"
                rad="var(--s10)"
                mb="var(--s10)" 
                pv="center" 
                bg="var(--snow20)" 
                bgd="var(--dark60)">
                    <Segment 
                    h="400px"
                    pos="rtv"
                    radStart="var(--s10)"
                    radTopEnd="var(--s10)" 
                    pv="end"
                    space="var(--s20) var(--s10)"
                    cover={team.image && `url(${urlFor(team.image).url()})`}
                    $size="cover"
                    bgPos="center center"
                    repeat="no-repeat">
                        <Item rad="1rem" backdrop="blur" space="12px 24px">
                            <Headtext as="h4" hex="var(--dark40)" prefs="caps">
                                {team.name} / {team.role}
                            </Headtext>
                        </Item>
                    </Segment>

                    <Segment space="var(--s20) var(--s10)">
                        <Item>
                            <Text ff="backup" fs={14} variant={4} leading="24px">
                                <i>{team.bio}</i>
                            </Text>
                        </Item>
                    </Segment>
                </Card>
            ))}
        </Box>
    )
}