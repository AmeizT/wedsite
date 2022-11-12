import styled, { css } from 'styled-components'
import { Base, Border, Input, Radius, Space, Typography } from '../../Common'

export const TextField = styled.textarea.attrs(props => ({
    placeholder: props.faker,
}))`
    ${Base}
    ${Border}
    ${Input}
    ${Radius}
    ${Space}
    ${Typography}  
    resize: none;

    &:focus {
        ${(props) => {
            switch(props.focus){
                case "contained":
                    return css`
                        border: var(--borderActive);
                    `

                case "base":
                    return css`
                        border-bottom: var(--borderActive);
                    `
            }
        }}
    }
`