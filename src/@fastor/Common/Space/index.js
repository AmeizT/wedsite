import styled, { css } from 'styled-components'

export const Space = css`
    ${(props) => {
        switch(props.space){
            case 12:
                return css`
                    padding: var(--size12);
                `;
                
            case 25:
                return css`
                    padding: var(--size25);
                `;

            case 50:
                return css`
                    padding: var(--size50);
                `;

            case 75:
                return css`
                    padding: var(--size75);
                `;

            case 80:
                return css`
                    padding: var(--size80);
                `

            default: 
                return css`
                    padding: ${props => props.space};
                `;
        };
    }}

    ${(props) => {
        switch(props.pt){
            case 1:
                return css`
                    padding-top: var(--size12);
                `

            case 2:
                return css`
                    padding-top: var(--size25);
                `

            case 3:
                return css`
                    padding-top: var(--size50);
                `

            case 4:
                return css`
                    padding-top: var(--size80);
                `

            case 5:
                return css`
                    padding-top: var(--size90);
                `

            default:
                return css`
                    padding-top: ${props => props.pt};
                `
        }
    }}

    ${(props) => {
        switch(props.ps){
            case 1:
                return css`
                    padding-left: var(--size12);
                `

            case 2:
                return css`
                    padding-left: var(--size25);
                `

            case 3:
                return css`
                    padding-left: var(--size50);
                `

            case 4:
                return css`
                    padding-left: var(--size80);
                `

            case 5:
                return css`
                    padding-left: var(--size90);
                `

            default:
                return css`
                    padding-left: ${props => props.ps};
                `
        }
    }}

    ${(props) => {
        switch(props.pr){
            case 1:
                return css`
                    padding-right: var(--size12);
                `

            case 2:
                return css`
                    padding-right: var(--size25);
                `

            case 3:
                return css`
                    padding-right: var(--size50);
                `

            case 4:
                return css`
                    padding-right: var(--size80);
                `

            case 5:
                return css`
                    padding-right: var(--size90);
                `

            default:
                return css`
                    padding-right: ${props => props.pr};
                `
        }
    }}

    ${(props) => {
        switch(props.pb){
            case 1:
                return css`
                    padding-bottom: var(--size12);
                `

            case 2:
                return css`
                    padding-bottom: var(--size25);
                `

            case 3:
                return css`
                    padding-bottom: var(--size50);
                `

            case 4:
                return css`
                    padding-bottom: var(--size80);
                `

            case 5:
                return css`
                    padding-bottom: var(--size90);
                `

            default:
                return css`
                    padding-bottom: ${props => props.pb};
                `
        }
    }}

    margin: ${props => props.gutter};

    ${(props) => {
        switch(props.mt){
            case 1:
                return css`
                    margin-top: var(--size12);
                `

            case 2:
                return css`
                    margin-top: var(--size25);
                `

            case 3:
                return css`
                    margin-top: var(--size50);
                `

            case 4:
                return css`
                    margin-top: var(--size80);
                `

            case 5:
                return css`
                    margin-top: var(--size90);
                `

            default:
                return css`
                    margin-top: ${props => props.mt};
                `
        }
    }}

    ${(props) => {
        switch(props.ms){
            case 1:
                return css`
                    margin-left: var(--size12);
                `

            case 2:
                return css`
                    margin-left: var(--size25);
                `

            case 3:
                return css`
                    margin-left: var(--size50);
                `

            case 4:
                return css`
                    margin-left: var(--size80);
                `

            case 5:
                return css`
                    margin-left: var(--size90);
                `

            default:
                return css`
                    margin-left: ${props => props.ms};
                `
        }
    }}

    ${(props) => {
        switch(props.mr){
            case 1:
                return css`
                    margin-right: var(--size12);
                `

            case 2:
                return css`
                    margin-right: var(--size25);
                `

            case 3:
                return css`
                    margin-right: var(--size50);
                `

            case 4:
                return css`
                    margin-right: var(--size80);
                `

            case 5:
                return css`
                    margin-right: var(--size90);
                `

            default:
                return css`
                    margin-right: ${props => props.mr};
                `
        }
    }}

    ${(props) => {
        switch(props.mb){
            case 1:
                return css`
                    margin-bottom: var(--size12);
                `

            case 2:
                return css`
                    margin-bottom: var(--size25);
                `

            case 3:
                return css`
                    margin-bottom: var(--size50);
                `

            case 4:
                return css`
                    margin-bottom: var(--size80);
                `

            case 5:
                return css`
                    margin-bottom: var(--size90);
                `

            default:
                return css`
                    margin-bottom: ${props => props.mb};
                `
        }
    }}
`

