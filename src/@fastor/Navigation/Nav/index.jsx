import styled from 'styled-components'
import { Base, Border, Space } from '../../Common'

export const Nav = styled.nav `
    ${Base}
    ${Border}
    ${Space}

    &.hidden {
        opacity: 0;
        visibility: hidden;
    }

    &.active {
        opacity: 1;
        visibility: visible;
        transition: opacity 2s, max-height 200ms cubic-bezier(0.48,0.04,0.52,0.96);;
    }
`