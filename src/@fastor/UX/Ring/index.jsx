import styled, { css } from 'styled-components'

export const RingContainer = styled.div`
    display: grid;
    place-items: center;

    & .ring {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1000ms linear infinite
    }

    & .ring::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 3px solid var(--primary);
        animation: prixClipFix 2000ms linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes prixClipFix {
        0% {
            clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0);
        }

        25% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0);
        }

        50% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%);
        }

        75% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%);
        }

        100% {
            clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0);
        }
    }
`

export const Ring = styled.div``

export function RingLoader(){
    return (
        <RingContainer>
            <Ring className="ring" />
        </RingContainer>
    )
}