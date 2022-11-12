import styled, { css } from 'styled-components'
import { Base, Border, Input, Radius, Space, Typography } from '../../Common'

export const CharField = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.faker,
}))`
    ${Base}
    ${Border}
    ${Input}
    ${Radius}
    ${Space}
    ${Typography}  

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