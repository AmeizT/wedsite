import React from "react"
import Layout from "../src/layout"
import Router from "next/router"
import "../src/assets/sass/app.scss"
import store from "../src/context/store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PageLoader from "../src/components/PageLoader"

export default function MyApp({ Component, pageProps }){
    const [loading, setLoading] = React.useState(false)
    
    return (
        <Provider store={store}>
            <PageLoader loading={loading} setLoading={setLoading} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer />
        </Provider>
        
    )
}