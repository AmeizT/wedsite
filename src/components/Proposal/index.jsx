import React from "react"
import { BsPause, BsPlay } from "react-icons/bs"
import { VscPlay } from "react-icons/vsc"
import { Box, Backdrop, Button, Headtext, Icon, Item, Stack } from "../../@fastor"

export default function Proposal(){
    const videoRef = React.useRef(null)
    const [stream, setStream] = React.useState(false)

    function handleStream(){
        console.log("video clicked")
        if(videoRef.current.paused){
            videoRef.current.play()
            setStream(true)
        } else {
            videoRef.current.pause()
            setStream(false)
        }
    }

    return (
        <Box $dir="vrt" space="var(--h30) 0 0">
            <Item pb="var(--s20)" px="center">
                <Headtext fs="34px" variant={4} dist="center">
                    The Proposal 
                </Headtext>
            </Item>

            <Stack h="240px" pos="rtv">
                <Item h="100%" view={stream ? "none" : "FLX"} pos="abs" rad="var(--s10)" zx="1" pv="center" px="center" bg={stream ? "transparent" : "#00000050"}>
                    <Button rad="50px" space="20px" backdrop="fog" bg="#ffffff10" onClick={handleStream}>
                        <Icon size="40" hex="var(--snow10)">
                            {stream ? <BsPause /> : <BsPlay />}
                        </Icon>
                    </Button>
                </Item>

                <video 
                ref={videoRef}
                controls={stream && true}
                controlsList="nodownload nofullscreen"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--s10)" }}>
                    <source src="/video/video.mp4" type="video/mp4" />
                </video>
            </Stack>
        </Box>
    )
}