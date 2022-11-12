import styled, {css} from 'styled-components'
import { Border, Radius, Space, Typography } from '../../Common'

export const NavLink = styled.a `
    ${Typography}
    ${Space}
    ${Radius}
    ${Border}

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    &:hover {
        color: ${props => props.mouseOn};
    }

    &:active {
        color: var(--sagebrush);
    }
`