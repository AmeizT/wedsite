import styled, {css} from 'styled-components'
import { Base, Border, Radius, Space } from '../../Common';

export const Header = styled.header.attrs({
    role: "banner",
})`
    ${Base}
    ${Border}
    ${Space}
    ${Radius}

    ${(props) => {
        switch(props.h){
            case 10:
                return css`
                    height: var(--h10);
                `;

            case 20:
                return css`
                    height: var(--h20);
                `;
            
            default:
                return css`
                    height: ${props => props.ht};
                `;
        }
    }};
    
    z-index: var(--zx90);

    & svg {
        fill: ${props => props.fill};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.filld};
        }
    }

    .brand svg {
        & .primary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }

        & .secondary {
            fill: var(--dark-500);
            @media(prefers-color-scheme: dark){
                fill: var(--gray-300);
            }
        }
    }

    &.active {
        opacity: 0.99;
        background: var(--dark-500);
    }

    &.active svg {
        fill: var(--gray-300);
    }

    &.active .brand svg {
        & .primary {
            fill: var(--gray-300);
        }

        & .secondary {
            fill: var(--gray-300);
        }
    }
`