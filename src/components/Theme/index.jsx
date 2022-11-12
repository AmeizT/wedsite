import React from "react"
import { MdOutlineBrightness4 } from "react-icons/md"
import { Box, Button, Icon, Item, Text } from "../../@fastor"


export default function Theme({ themeNote, setThemeNote }){
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if(themeNote){
                setThemeNote(false)
            }
        }, 8000)
        return () => clearTimeout(timer)
    }, [setThemeNote, themeNote])

    return (
        <React.Fragment>
            <Box pos="fxd" zx="1" px="end" $top="calc(var(--h30) + var(--s10))" $end="var(--s10)">
                <Item h="fit" pos="rtv" px="end" arrange={2}>
                    <Button rad="var(--s7)" space="7px" bg="#ffffff40" onClick={() => setThemeNote(true)}>
                        <Icon size={24} hex="var(--snow10)">
                            <MdOutlineBrightness4 />
                        </Icon>
                    </Button>
                </Item>

                <Box className={themeNote ? "zoomout" : "zoomin"} w="70%" pos="abs" rad="var(--s10)" arrange={1} space="var(--s7)" backdrop="fog" $transition="transform 200ms var(--easeInOut077)">
                    <Text fs={12} hex="var(--snow10)" leading="18px">
                        This app has been to configured to adapt to your browser&apos;s theme settings. To switch between light/dark themes, go to your browser&apos;s settings and choose your preferred theme.
                    </Text>
                </Box>
            </Box>
        </React.Fragment>
    )
}