import { css } from 'styled-components'

export const Base = css`
    ${(props) => {
        switch(props.w){
            case "fit":
                return css`
                    width: fit-content;
                `

            case "max":
                return css`
                    width: max-content;
                `

            case "min":
                return css`
                    width: min-content;
                `

            case "predict":
                return css`
                    width: 100%;
                    width: -webkit-fill-available;
                `;

            default:
                return css`
                    width: ${props => props.w || "100%" };
                `
        }
    }}

    ${(props) => {
        switch(props.h){
            case "fill":
                return css`
                    height: 100vh;
                `
            case "fit":
                return css`
                    height: fit-content;
                `

            case "max":
                return css`
                    height: max-content;
                `

            case "min":
                return css`
                    height: min-content;
                `

            case "dynamic":
                return css`
                    height: 100%;
                    height: -webkit-fill-available;
                `;

            default:
                return css`
                    height: ${props => props.h};
                `
        }
    }}
    
    min-height: ${props => props.mh};
    
    ${(props) => {
        switch(props.view){
            case "FLX":
                return css`
                    display: flex;
                `

            case "GRD":
                return css`
                    display: grid;
                `

            case "BLK":
                return css`
                    display: block;
                `

            case "LNB":
                return css`
                    display: inline-block;
                `

            case "LNF":
                return css`
                    display: inline-flex;
                `

            case "NON":
                return css`
                    display: none;
                `

            default:
                return css`
                    display: ${props => props.view || "flex"};
                `
        }
    }}

    ${(props) => {
        switch(props.viewFor){
            case "ph":
                return css`
                    display: flex;
                    @media only screen and (min-width: 1025px){
                        display: none;
                    }
                `

            case "cp":
                return css`
                    display: none;
                    @media only screen and (min-width: 1025px){
                        display: flex;
                    }
                `
        }
    }}

    ${(props) => {
        switch(props.pos){
            case "fxd":
                return css`
                    position: fixed;
                `

            case "rtv":
                return css`
                    position: relative;
                `

            case "abs":
                return css`
                    position: absolute;
                `

            case "stk":
                return css`
                    position: sticky;
                `

            default:
                return css`
                    position: ${props => props.pos};
                `
        }
    }}

    ${(props) => {
        switch(props.$dir){
            case "vrt":
                return css`
                    flex-flow: column;
                `

            case "hrt":
                return css`
                    flex-flow: row;
                `

            default:
                return css`
                    flex-flow: ${props => props.$dir};
                `
        }
    }}

    ${(props) => {
        switch(props.pv){
            case "start":
                return css`
                    align-items: flex-start;
                `

            case "center":
                return css`
                    align-items: center;
                `

            case "end":
                return css`
                    align-items: flex-end;
                `

            default:
                return css`
                    place-items: ${props => props.pv};
                    
                `
        }
    }}

    ${(props) => {
        switch(props.px){
            case "start":
                return css`
                    justify-content: flex-start;
                `

            case "center":
                return css`
                    justify-content: center;
                `

            case "end":
                return css`
                    justify-content: flex-end;
                `

            case "between":
                return css`
                    justify-content: space-between;
                `

            case "around":
                return css`
                    justify-content: space-around;
                `

            case "even":
                return css`
                    justify-content: space-evenly;
                `
            
            default:
                return css`
                    justify-content: ${props => props.px};
                ` 
        }
    }}
    
    grid-template: ${props => props.grid};
    grid-template-columns: ${props => props.gtc};
    grid-template-rows: ${props => props.gtr};
    grid-column: ${props => props.gc};
    grid-row: ${props => props.gr};
    grid-auto-rows: ${props => props.gar};
    gap: ${props => props.gap};
    scroll-snap-align: ${props => props.snap};
    scroll-snap-stop: ${props => props.stop};
    top: ${props => props.$top};
    bottom: ${props => props.base};
    left: ${props => props.start};
    right: ${props => props.$end};
    order: ${props => props.arrange};
    z-index: ${props => props.zx};
    box-shadow: ${props => props.shadow};
    overflow: ${props => props.spill};
    overflow-x: ${props => props.ox};
    overflow-y: ${props => props.oy};
    visibility: ${props => props.vb};
    opacity: ${props => props.opt};
    transform: ${props => props.tf};
    transform-origin: ${props => props.tfo};
    background-image: ${props => props.cover};
    background-size: ${props => props.$size};
    background-position: ${props => props.bgPos};
    background-repeat: ${props => props.repeat};
    background-origin: ${props => props.origin};
    background-attachment: ${props => props.attachment};
    background: ${props => props.bgg};
    background-color: ${props => props.bg};
    @media(prefers-color-scheme: dark){
        background-color: ${props => props.bgd};
    }

    ${(props) => {
        switch(props.backdrop){
            case "blur":
                return css`
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    background: #ffffff50;
                `

            case "mirror":
                return css`
                    background: #000000db;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                `

            case "fog":
                return css`
                    background: #00000090;
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                `
        }
    }}
    transition: ${props => props.$transition};
    
    @media only screen and (min-width: 1024px){
        width: ${props => props.wt7x};
        height: ${props => props.ht7x};
        display: ${props => props.view7x};
        grid-template: ${props => props.grid7x};
        grid-template-columns: ${props => props.cnx3};
        grid-template-rows: ${props => props.row7x};
        grid-column: ${props => props.$cos7x};
        flex-direction: ${props => props.$direction7x};
        gap: ${props => props.gap7x};
        order: ${props => props.order7x};
        padding: ${props => props.space7x};
        margin: ${props => props.gut7x};
        justify-content: ${props => props.posx7};
        align-items: ${props => props.posv7};
    }

    & svg {
        fill: ${props => props.iconPaint};
        @media(prefers-color-scheme: dark){
            fill: ${props => props.iconPaintd};
        }
    }

    & ::placeholder { 
        color: ${props => props.fakerHex};
        opacity: 1;
    }

    & :-ms-input-placeholder { 
        color: ${props => props.fakerHex};
    }

    & ::-ms-input-placeholder { 
        color: ${props => props.fakerHex};
    }

    & img {
        border-radius: ${props => props.imgRad};
    }

    & .zoomin {
        opacity: 0;
        transform: scale(0);
    }

    & .zoomout {
        opacity: 1;
        transform: scale(1);
    }

    & .active {
        opacity: 1;
        visibility: visible;
    }

    & .idle {
        height: 0;
        opacity: 0;
        visibility: hidden;
    }
`