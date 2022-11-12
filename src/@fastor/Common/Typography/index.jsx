import { css } from 'styled-components'

export const Typography = css`
    line-height: ${props => props.leading};
    letter-spacing: ${props => props.tracking};

    ${(props) => {
        switch(props.ff){
            case "backup":
                return css`
                    font-family: var(--ff-fallback);
                `

            default:
                return css`
                    font-family: ${props => props.ff};
                `
        }
    }}
    
    ${(props) => {
        switch(props.dist){
            case "start":
                return css`
                    text-align: left;
                `
            
            case "center":
                return css`
                    text-align: center;
                `

            case "even":
                return css`
                    text-align: justify;
                `

            case "baseline":
                return css`
                    vertical-align: baseline;
                `

            case "top":
                return css`
                    vertical-align: text-top; 
                `

            case "bottom":
                return css`
                    vertical-align: text-bottom;
                `

            case "sup":
                return css`
                    vertical-align: super;
                `

            case "sub":
                return css`
                    vertical-align: sub;
                `

            default:
                return css`
                    text-align: ${props => props.dist};
                    @media only screen and (min-width: 1024px){
                        text-align: ${props => props.dist3x};
                    }
                    
                `
        }
    }}

    ${(props) => {
        switch(props.muted){
            case true:
                return css`
                    color: var(--gray20);
                    @media(prefers-color-scheme: dark){
                        color: var(--gray20);
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.variant){
            case 1:
                return css`
                    font-weight: 100;
                `

            case 3:
                return css`
                    font-weight: 300;
                `

            case 4:
                return css`
                    font-weight: 400;
                `

            case 5:
                return css`
                    font-weight: 500;
                `

            case 6:
                return css`
                    font-weight: 600;
                `

            case 7:
                return css`
                    font-weight: 700;
                `

            case 8:
                return css`
                    font-weight: 800;
                `

            case 9:
                return css`
                    font-weight: 900;
                `
        }
    }}
    
    ${(props) => {
        switch(props.fs){
            case 10:
                return css`
                    font-size: var(--fs10);
                `

            case 12:
                return css`
                    font-size: var(--fs12);
                `

            case 13:
                return css`
                    font-size: var(--fs13);
                `

            case 14:
                return css`
                    font-size: var(--fs14);
                `

            case 15:
                return css`
                    font-size: var(--fs15);
                `

            case 16:
                return css`
                    font-size: var(--fs16);
                `

            case 17:
                return css`
                    font-size: var(--fs17);
                `

            case 18:
                return css`
                    font-size: var(--fs18);
                `

            case 20:
                return css`
                    font-size: var(--fs20);
                `

            case 22:
                return css`
                    font-size: var(--fs22);
                `

            case 24:
                return css`
                    font-size: var(--fs24);
                `
            
            case 28:
                return css`
                    font-size: var(--fs28);
                `

            case 32:
                return css`
                    font-size: var(--fs32);
                `

            case 60:
                return css`
                    font-size: var(--fs60);
                `
            
            default: 
                return css`
                    font-size: ${props => props.fs};
                    @media only screen and (min-width: 1024px){
                        font-size: ${props => props.fs3x};
                    }
                `
        }
    }}


    ${(props) => {
        switch(props.prefs){
            case "caps":
                return css`
                    text-transform: capitalize;
                `

            case "upper":
                return css`
                    text-transform: uppercase;
                `

            case "lower":
                return css`
                    text-transform: lowercase;
                `
            
            case "strike":
                return css`
                    text-decoration: line-through;
                `

            case "underline":
                return css`
                    text-decoration: underline;
                `

            case "lowerstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: lowercase;
                `

            case "upperstrike":
                return css`
                    text-decoration: line-through;
                    text-transform: uppercase;
                `
        }
    }}
    color: ${props => props.$color};
    color: ${props => props.hex};
    @media(prefers-color-scheme: dark){
        color: ${props => props.hexd};
    }
    background: ${props => props.bg};
    background-clip: ${props => props.clip};
    -webkit-background-clip: ${props => props.clip};
`