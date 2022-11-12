import { css } from 'styled-components'

export const Input = css`
    width: ${props => props.w};
    ${(props) => {
        switch(props.inputBorder){
            case 'contained':
                return css`
                    border: var(--border20);
                    @media(prefers-color-scheme: dark){
                        border: var(--border-d20);
                    }
                `

            case 'base':
                return css`
                    border-bottom: var(--border20);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--border-d20);
                    }
                `

            default:
                return css`
                    border: ${props => props.border || 'none'};
                `
        }
    }}

    color: ${props => props.color || 'var(--dark40)'};
    background: ${props => props.paint};
    @media(prefers-color-scheme: dark){
        color: ${props => props.colord || 'var(--snow20)'};
        background: ${props => props.paintd};
    }

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