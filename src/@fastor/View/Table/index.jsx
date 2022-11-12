import styled, {css} from 'styled-components'
import { Border, Root, Typography } from '../../Common'

export const Table = styled.table`
    width: ${props => props.wt || '100%'};
    display: table;
    border-collapse: collapse;
    ${Border}
    border: none;
`

export const THead = styled.thead`
    & tr:nth-child(1) {
        background-color: var(--snow20);
        @media(prefers-color-scheme:dark){
            background-color: var(--dark60);
        }
    }
`

export const TableBody = styled.tbody`
    & tr:nth-child(even) {
        background-color: var(--snow20);
        @media(prefers-color-scheme: dark){
            background-color: var(--dark60);
        }
    }
`

export const TableFoot = styled.tfoot``


export const TableRow = styled.tr.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    width: ${props => props.wt || '100%'};
`

export const TableHead = styled.th.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    text-align: left;
    padding: ${props => props.space || '12px 0'};
    ${Typography}
`

export const TableData = styled.td.attrs(props => ({
    colspan: props.cs,
    rowspan: props.rs,
}))`
    text-align: left;
    padding: ${props => props.space || '12px 0'};
    ${Typography}
`