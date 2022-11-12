import React from "react"
import { Backdrop, Container, Headtext, Sector, Stack, Tiny } from "../../@fastor"

export default function Fireworks({ fireworks }){
    return (
        <React.Fragment>
            {fireworks &&
                <Sector h="30vh" pos="relative" pv="center" zx={1100} cover="url('/fireworks.gif')" repeat="no-repeat" $size="cover">
                    <Backdrop h="100%" pv="center" variant="dark">
                        <Container space="0">
                            <Stack $dir="vrt" pv="center">
                                <Headtext dist="center" fs={32} variant={7} hex="var(--snow10)" hexd="var(--snow10)">
                                    Hooray, <br /> It&apos;s the Wedding Day!
                                </Headtext>

                                <Tiny pt="0.5rem" fs={14} hex="var(--snow10)" hexd="var(--snow10)">
                                    Thanks for patiently waiting. It&apos;s time to celebrate!
                                </Tiny>
                            </Stack>
                        </Container>
                    </Backdrop>
                </Sector>
            }
        </React.Fragment>
    )
}