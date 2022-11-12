import styled from 'styled-components'
import { Base } from '../../Common'

export const Shuffo = styled.div `
    ${Base}
    display: ${props => props.view || 'grid'};
    scroll-snap-type: ${props => props.snapType || 'x mandatory'};
    -ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`