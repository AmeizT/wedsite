import InfoCard from "./InfoCard"
import { Box, RingLoader, Segment } from "../../@fastor"
import { useSelector } from "react-redux"

export default function Info({ info }){
    const { loading } = useSelector(state => state.info)
    
    return (
        <Box $dir="vrt" space="var(--h10) var(--s10) var(--s10)">
            {loading &&
                <Segment $dir="vrt" h="100vh" pos="fxd" start="0" $top="0" zx="1" px="center" py="center" bg="var(--snow10)" bgd="var(--dark70)">
                    <RingLoader />
                </Segment>
            }

            {info && info.map(info => (
                <InfoCard key={info._id} info={info} />
            ))}
        </Box>
    )
}