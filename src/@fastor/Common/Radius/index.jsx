import { css } from 'styled-components'

export const Radius = css `
    ${(props) => {
        switch(props.rad){
            case 2:
                return css`
                    border-radius: var(--s2);
                `
                
            case 3:
                return css`
                    border-radius: var(--s3);
                `

            case 4:
                return css`
                    border-radius: var(--s4);
                `

            case 5:
                return css`
                    border-radius: var(--s5);
                `

            case "round":
                return css`
                    border-radius: 50px;
                `

            case "straight":
                return css`
                    border-radius: 0px;
                `
            
            case "circle":
                return css`
                    clip-path: circle();
                `

            default:
                return css`
                    border-radius: ${props => props.rad};
                `
        }
    }}

    ${(props) => {
        switch(props.radTopStart){
            case 2:
                return css`
                    border-top-left-radius: var(--s2);
                `
                
            case 3:
                return css`
                    border-top-left-radius: var(--s3);
                `

            case 4:
                return css`
                    border-top-left-radius: var(--s4);
                `

            case 5:
                return css`
                    border-top-left-radius: var(--s5);
                `

            default:
                return css`
                    border-top-left-radius: ${props => props.radStart};
                `
        }
    }}

    ${(props) => {
        switch(props.radTopEnd){
            case 2:
                return css`
                    border-top-right-radius: var(--s2);
                `
                
            case 3:
                return css`
                    border-top-right-radius: var(--s3);
                `

            case 4:
                return css`
                    border-top-right-radius: var(--s4);
                `

            case 5:
                return css`
                    border-top-right-radius: var(--s5);
                `

            default:
                return css`
                    border-top-right-radius: ${props => props.radTopEnd};
                `
        }
    }}

    ${(props) => {
        switch(props.radBaseStart){
            case 2:
                return css`
                    border-bottom-left-radius: var(--s2);
                `
                
            case 3:
                return css`
                    border-bottom-left-radius: var(--s3);
                `

            case 4:
                return css`
                    border-bottom-left-radius: var(--s4);
                `

            case 5:
                return css`
                    border-bottom-left-radius: var(--s5);
                `
            
            default:
                return css`
                    border-bottom-left-radius: ${props => props.radBaseStart};
                `
        }
    }}

    ${(props) => {
        switch(props.radBaseEnd){
            case 2:
                return css`
                    border-bottom-right-radius: var(--s2);
                `
                
            case 3:
                return css`
                    border-bottom-right-radius: var(--s3);
                `

            case 4:
                return css`
                    border-bottom-right-radius: var(--s4);
                `

            case 5:
                return css`
                    border-bottom-right-radius: var(--s5);
                `

            default:
                return css`
                    border-bottom-right-radius: ${props => props.radBaseEnd};
                `
        }
    }}
`