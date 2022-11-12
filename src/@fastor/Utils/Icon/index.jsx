import styled from 'styled-components'
import { IconContext } from 'react-icons'

export function Icon({ children, size, hex }){
    return (
        <IconContext.Provider value={{ size: size, color: hex }}>
            {children}
        </IconContext.Provider>
    )
}
