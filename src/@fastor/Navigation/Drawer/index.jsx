import styled, { css } from 'styled-components'
import { Base, Border, Radius, Space } from '../../Common'

export const Drawer = styled.dialog`
    ${Base}
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0;
    color: var(--dark70);
    border: none;
    @media(prefers-color-scheme: dark){
        color: var(--snow20);
    }
    ${Space}
    ${Border}
    ${Radius}
    z-index: ${props => props.zx};
    transition: all 300ms var(--easeInOut077);

    &[open] {
        transform: translate(0, 0);
        visibility: visible;
        opacity: 1;
    }

    &.appear {
        width: 100%;
        visibility: visible;
        opacity: 1;
    }

    &.disappear {
        width: 0%;
        visibility: hidden;
        opacity: 0;
    }
`