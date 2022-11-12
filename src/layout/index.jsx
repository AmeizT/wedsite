import React from 'react'
import AppBar from './AppBar'
import Content from './Content'
import Footer from './Footer'
import Desktop from "./Desktop"
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../context/slices/guests'
import Logger from '../components/Logger'
import { Box } from "../@fastor"

export default function Layout({ children }){
    const dispatch = useDispatch()
    const { authenticated } = useSelector(state => state.guests)

    return (
        <React.Fragment>
            <Box $dir="vrt" viewFor="ph">
                {authenticated ? 
                    <React.Fragment>
                        <AppBar />
                        <Content>{children}</Content>
                        <Footer />
                    </React.Fragment> :
                    <Logger />
                }
            </Box>

            <Desktop />
        </React.Fragment>
    )
}