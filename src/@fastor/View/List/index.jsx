import styled, { css } from 'styled-components'
import { Base, Border, Space, Radius } from '../../Common'

export const List = styled.ul.attrs({
    role: 'list',
}) `
    ${Base}
    ${Space}
    ${Border}
    ${Radius}
`

export const ListItem = styled.li.attrs({
    role: 'listitem',
})`
    width: ${props => props.w};
    ${Border}
    ${Space}
    padding-left: ${props => props.spaceStart};
    &:nth-child(1) {
        padding-left: ${props => props.navSpaceStart};
    }
`

