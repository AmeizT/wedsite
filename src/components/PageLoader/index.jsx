import React from "react"
import Router from "next/router"
import { Box, Container, Item, Headtext, RingLoader, Tiny } from "../../@fastor"
 
export default function PageLoader({ loading, setLoading }){
    React.useEffect(() => {
        Router.events.on(
            "routeChangeStart", () => setLoading(true)
        )

        Router.events.on(
            "routeChangeComplete", () => setLoading(false)
        )
    }, [loading, setLoading])

    return (
        loading && (
            <Box h="100vh" pos="fxd" zx={1999} px="center" pv="center" backdrop="mirror">
                <Container $dir="vrt" pv="vrt">
                    <RingLoader />

                    <Item $dir="vrt" pv="center" pt="var(--s20)">
                        <Headtext fs={30} pos="center" variant={4} hex="var(--sage)">
                            {process.env.NEXT_PUBLIC_COUPLES_NAMES || "Nate & Kate"}
                        </Headtext>

                        <Tiny fs={12} pos="center" variant={4} prefs="upper" hex="var(--sage)" tracking="0.10ex">
                            Wedding Day / {process.env.NEXT_PUBLIC_DATE || "Dec 31, 2023"}.
                        </Tiny>
                    </Item>
                </Container>
            </Box>
        )
    )
}