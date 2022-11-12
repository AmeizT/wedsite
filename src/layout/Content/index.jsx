import { Box, Container } from '../../@fastor'

export default function Content({ children }){
    return <Box as="main" $dir="vrt">{children}</Box>
}