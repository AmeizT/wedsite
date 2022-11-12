import styled, { css } from 'styled-components'
import { Base, Border, Space, Radius } from '../../Common'

export const Card = styled.div`
    ${Base}
    ${Space}
    ${Border}
    ${Radius}

    ${(props) => {
        switch(props.cursor){
            case "pointer":
                return css`
                    cursor: pointer;
                `
        }
    }}
    
    ${(props) => {
        switch(props.variant){
            case "contained":
                return css`
                    background: var(--snow20);
                    @media(prefers-color-scheme: dark){
                        background: var(--dark50);
                    }
                `;
            
            case "outline":
                return css`
                    background: none;
                    @media(prefers-color-scheme: dark){
                        background: none;
                    }
                `;
        }
    }}

    & img {
        ${(props) => {
            switch(props.imageRad){
                case "top":
                    return css`
                        border-top-right-radius: var(--size40);
                        border-top-left-radius: var(--size40);
                    `
            }
        }}
    }
`