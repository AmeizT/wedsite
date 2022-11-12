import { Box, Button, Card, Container, Lead, List, ListItem, Segment, Stack, Item } from "../../../@fastor";

export default function GuestCard({ guests, children }){
    return (
        <Box $dir="vrt" space="var(--size100) 0">
            {children}
            <List $dir="vrt" pt="var(--size100)">
                {guests.map((guest, i) => (
                <ListItem key={guest._id} wt="100%" border="base" space="var(--size100) 0"> 
                    <Card>
                        <Container space="0">
                            <Stack view="block" wt="fit" pr="14px">
                                <Button fs={13} rad="round" space="10px 14px" $color="var(--snow10)" bg="var(--sage)">
                                    {i + 1}
                                </Button>
                            </Stack>

                            <Stack $dir="vrt">
                                <Item>
                                    <Lead fs={16}>
                                        {guest.name} {guest?.nickname} {guest.surname} 
                                        &nbsp;<Lead fs={14} muted={true} prefs="caps">/ {guest.relation}</Lead>
                                    </Lead>
                                </Item>

                                <Item pt="1rem">
                                    <Button rad="round" fs={12} bg="var(--fire)">
                                        Seat #: {guest.seat ? guest.seat : 'TBA'}
                                    </Button>

                                    <Button
                                    rad="round" 
                                    fs={12} 
                                    gutter="0 0 0 auto" 
                                    $color="var(--snow10)" 
                                    bg="var(--sage)">
                                        RSVP
                                    </Button>
                                </Item>
                            </Stack>
                        </Container>
                    </Card>
                </ListItem>))}
            </List>
        </Box>
    )
}