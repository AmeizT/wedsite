import styled, {css} from 'styled-components'
import { Border, Radius, Space, Typography } from '../../Common'

export const Button = styled.button.attrs({
    role: 'button',
    tabIndex: 0,
})`
    width: ${props => props.w};
    height: ${props => props.h};
    display: ${props => props.view || 'flex'};
    justify-content: ${props => props.px || "center"};
    align-items: ${props => props.pv || "center"};
    padding: ${props => props.space || '12px 24px'};
    @media only screen and (min-width: 1020px){
        padding: ${props => props.space7x || '4px 12px'};
    }
    ${Border}
    ${Radius}
    ${Space}
    ${Typography}
    color: ${props => props.$color};
    transition: 100ms background ease-in-out;
    background: ${props => props.bgg};
    background-color: ${props => props.bg};
    box-shadow: ${props => props.shadow};
    @media(prefers-color-scheme: dark){
        color: ${props => props.$colord};
        background-color: ${props => props.bgd};
    }

    & svg {
        width: ${props => props.svgSizeX};
        height: ${props => props.svgSizeY};
        fill: ${props => props.iconHex};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iconHexd};
        }
    }

    &:hover {
        background: ${props => props.hoverPaint};
        color: ${props => props.hoverColor};
    }

    &:hover svg {
        fill: ${props => props.hoverIcon};
        transition: 100ms fill ease-in-out;
    }

    &:disabled {
        color: var(--gray20);
        background: var(--snow40);
        @media(prefers-color-scheme: dark){
            color: var(--gray20);
            background: var(--dark50);
        }
    }
`