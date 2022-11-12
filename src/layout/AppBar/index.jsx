import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useMenu } from '../../data'
import { Button, Container, Header, Item, List, ListItem, NavLink, Segment, Stack, Tiny } from '../../@fastor'

export default function AppBar(){
    const menu = useMenu()
    return (
        <Header ht="var(--h10)" pos="fxd" pv="center" backdrop="fog">
            <Container $dir="vrt" space="0">
                <Stack view="none" bg="#b1bca0db" space="6px 0" px="center">
                    <Tiny $color="var(--snow10)">
                        <Link href="/guests" passHref>
                            <NavLink $color="var(--snow10)" prefs="underline">Rsvp</NavLink>
                        </Link>&nbsp;before September 14, 2022.
                    </Tiny>
                </Stack>

                <Stack as="nav" pv="center" space="0 var(--s10)">
                    <Item>
                        <List px="between">
                            {menu.map(menu => (
                                <ListItem key={menu.id}>
                                    {menu.uri ?
                                        <Link href={menu.uri} passHref>
                                            <NavLink fs={13} variant={6} prefs="upper" $color="var(--snow10)">
                                                {menu.name}
                                            </NavLink>
                                        </Link> :

                                        <Button 
                                        title={menu.name}
                                        fs={14}
                                        rad="round"
                                        $color="var(--sage)" 
                                        space="6px 12px"
                                        bg="var(--snow10)"
                                        onClick={() => Router.push('/guests')}>
                                            {menu.name}
                                        </Button>
                                    }
                                </ListItem>
                            ))}
                        </List>
                    </Item>
                </Stack>
            </Container>
        </Header>
    )
}