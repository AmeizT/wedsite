import { css } from 'styled-components'

export const Border = css`
    ${(props) => {
        switch(props.line){
            case "base":
                return css`
                    border-bottom: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--border-d10);
                    }
                `

            case "top":
                return css`
                    border-top: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--border-d10);
                    }
                `

            case "start":
                return css`
                    border-left: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-left: var(--border-d10);
                    }
                `

            case "end":
                return css`
                    border-right: var(--border10);
                    @media(prefers-color-scheme: dark){
                        border-right: var(--border-d10);
                    }
                `

            case "contained":
                return css`
                    border: var(--border20);
                    @media(prefers-color-scheme: dark){
                        border: var(--border-d20);
                    }
                `

            default:
                return css`
                    border-bottom: ${props => props.bb};
                    border-top: ${props => props.bt};
                    border-left: ${props => props.bs};
                    border-right: ${props => props.br};
                    border: ${props => props.border};
                    @media(prefers-color-scheme: dark){
                        border: ${props => props.borderd};
                    }
                `
        }
    }}
`