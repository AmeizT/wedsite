import React from "react"
import { v4 as uuid } from "uuid"
import Fireworks from "../../components/Fireworks"
import { Box, Container, Stack, Item, Headtext, Tiny } from "../../@fastor"

export default function Timer({ fireworks, setFireworks }){
    const [days, setDays] = React.useState(0)
    const [hours, setHours] = React.useState(0)
    const [mins, setMins] = React.useState(0)
    const [sec, setSec] = React.useState(0)
    
    React.useEffect(() => {
        const countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();
        const remainDays = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days)
            setHours(hours)
            setMins(minutes)
            setSec(seconds)

            if (distance < 0) {
                clearInterval(remainDays);
            }
        }, 1000)
            
    }, [setFireworks])
            
    const timer = (t) => t < 10 ? `${'0'}${t}` : t
    const numerous = (i, str) => i === 1 ? str : `${str}s`

    const time = [
        {id: uuid(), name: numerous(days, 'Day'), hand: days },
        {id: uuid(), name: numerous(hours, 'Hour'), hand: hours },
        {id: uuid(), name: numerous(mins, 'Min'), hand: mins },
        {id: uuid(), name: numerous(sec, 'Sec'), hand: sec },
    ]
    
    return (
        <Box as="article" mb="1.5rem" px="center" rad="var(--s10)" backdrop="fog" bg="var(--sagebrush)">
            {!fireworks ? <Container space="var(--s7) var(--s5)">
                {time.map(time => (
                    <Stack key={time.id} $dir="vrt">
                        <Item px="center">
                            <Headtext as="h4" fs={28} hex="var(--snow10)" variant={3}>{timer(time.hand)}</Headtext>
                        </Item>

                        <Item px="center">
                            <Tiny prefs="upper" fs={10} hex="var(--snow10)" tracking="0.30ex">{time.name}</Tiny>
                        </Item>
                    </Stack>
                ))}
            </Container> :

            <Fireworks fireworks={fireworks} />}
        </Box>
    )
}

