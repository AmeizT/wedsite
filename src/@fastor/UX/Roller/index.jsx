import styled from "styled-components"
import { Box, Stack, Item } from "../../Layout"
import { Headtext, Lead } from "../../Text"

export const RollerContainer = styled.div`
    & .roller {
        width: 33px;
        height: 33px;
        border: 4px solid transparent;
        border-radius: 50%;
        border-top: 4px solid var(--sagebrush);
        border-right: 4px solid var(--sagebrush);
        -webkit-animation: spin 2s linear infinite; 
        animation: spin 1s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export function Roller(){
    return (
        <RollerContainer>
            <Stack $dir="vrt">
                <Item px="center" space="var(--s20) 0">
                    <div className="roller"></div>
                </Item>
            </Stack>
        </RollerContainer>
    )
}