import styled from 'styled-components'
import { Base, Radius, Input, Space, Typography } from '../../Common'

export const Select = styled.select.attrs(props => ({
    placeholder: props.faker,
}))`
    ${Base}
    ${Input}
    ${Radius}
    ${Space}
    ${Typography}
`

export const Option = styled.option `
    ${Typography}
`