import styled from 'styled-components'
import { Base, Border, Space, Typography } from '../../Common'

export const Details = styled.details`
    ${Base}
    ${Border}
    ${Space}
    
    & ::marker {
        display: none;
    }
`

export const Summary = styled.summary`
    ${Border}
    ${Typography}
    ${Space}
    list-style-type: none;
`