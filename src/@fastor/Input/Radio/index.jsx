import styled from 'styled-components'
import { Base, Radius, Space } from '../../Common'

export const Radio = styled.input.attrs({
    type: 'radio',
})`
    ${Base}
    ${Radius}
    ${Space}
`