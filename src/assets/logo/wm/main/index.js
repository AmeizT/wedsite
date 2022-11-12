import styled from 'styled-components'

const Logo = styled.span `
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        width: 8rem;
        height: auto;
        margin: 0 auto;
        @media only screen and (min-width: 1024px){
            width: 8rem;
        }

        & .primary {
            fill: var(--dark40);
            @media(prefers-color-scheme: dark){
                fill: var(--snow20);
            }
        }

        & .secondary {
            fill: var(--dark70);
            @media(prefers-color-scheme: dark){
                fill: var(--snow20);
                
            }
        }
    }    
`

export function WM(){
    return (
        <Logo>
            <svg id="3e4e2534-a757-43e3-a857-343e3cd2c09c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3240 360">
                <title>Discava</title>
                <rect x="648" width="72" height="360" className="primary" />
                <polygon points="936 72 936 144 1224 144 1224 360 864 360 864 324 936 288 1152 288 1152 216 864 216 864 0 1224 0 1224 36 1152 72 936 72" className="primary" />
                <polygon points="2232 36 2232 72 1872 72 1872 36 1944 0 2160 0 2232 36" className="primary" />
                <polygon points="2232 144 2232 360 2160 360 2160 216 1944 216 1944 360 1872 360 1872 144 2232 144" className="primary" />
                <polygon points="3240 36 3240 72 2880 72 2880 36 2952 0 3168 0 3240 36" className="primary" />
                <polygon points="3240 144 3240 360 3168 360 3168 216 2952 216 2952 360 2880 360 2880 144 3240 144" className="primary" />
                <polygon points="1728 36 1728 72 1368 72 1368 36 1440 0 1656 0 1728 36" className="primary" />
                <polygon points="1728 288 1728 324 1656 360 1440 360 1368 324 1368 144 1440 144 1440 288 1728 288" className="primary" />
                <polygon points="2593.27 360 2518.73 360 2376 145.9 2376 0 2448 0 2448 124.1 2556 286.1 2664 124.1 2664 0 2736 0 2736 145.9 2593.27 360" className="primary" />
                <polygon points="504 129.08 504 230.92 446.91 288 374.91 360 273.09 360 345.09 288 432 201.08 504 129.08" className="secondary" />
                <polygon points="504 0 504 129.08 432 201.08 432 0 504 0" className="primary" />
                <polygon points="432 0 432 72 72 72 72 288 0 288 0 0 432 0" className="primary" />
                <polygon points="345.09 288 273.09 360 0 360 0 288 345.09 288" className="secondary" />
            </svg>
        </Logo>
    )
}


