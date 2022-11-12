import styled from 'styled-components'

const Logo = styled.span `
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        width: 32px;
        height: auto;
        margin: 0 auto;
        @media only screen and (min-width: 1024px){
            width: 8rem;
        }

        & .primary {
            fill: var(--primary);
            @media(prefers-color-scheme: dark){
                fill: var(--primary);
            }
        }

        & .secondary {
            fill: var(--minor);
            @media(prefers-color-scheme: dark){
                fill: var(--minor);
                
            }
        }
    }    
`

export function LogoMark(){
    return (
        <Logo>
            <svg id="88532d6e-f7ad-42a7-adbf-cdc919fdbebe" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527 383">
                <title>Discava</title>
                <path d="M670,288v95H333V576H238V318a30,30,0,0,1,30-30Z" transform="translate(-238 -288)" className="primary" />
                <path d="M765,400.82V510.33a60,60,0,0,1-17.57,42.43L646.75,653.43A60,60,0,0,1,604.33,671H494.82Z" transform="translate(-238 -288)" className="secondary" />
                <path d="M765,318v82.82l-95,95V288h65A30,30,0,0,1,765,318Z" transform="translate(-238 -288)" className="primary" />
                <path d="M589.82,576l-95,95H268a30,30,0,0,1-30-30V576Z" transform="translate(-238 -288)" className="secondary" />
            </svg>
        </Logo>
    )
}


