import React from 'react'
import Head from 'next/head'
import cowsay from 'cowsay-browser'
import Layout from '../components/MyLayout.js'
import JSON2 from '../utils/JSON2.js'



class Ute extends React.Component {
    static async getInitialProps({pathname, asPath, req, res, err}) {
       
        console.log("getInitialProps de Ute")
       
        //console.log(`${JSON2.pretty(JSON2.stringify(o.req))}`)
        if (typeof pathname != "undefined")
            console.log(`${JSON2.pretty(JSON2.stringify(pathname))}`)
        if (typeof asPath != "undefined")
            console.log(`${JSON2.pretty(JSON2.stringify(asPath))}`)
        if (typeof req != "undefined")
            console.log(`${JSON2.pretty(JSON2.stringify(req))}`)
        if (typeof res != "undefined")
            console.log(`${JSON2.pretty(JSON2.stringify(res))}`)
        if (typeof err != "undefined")
            console.log(`${JSON2.pretty(JSON2.stringify(err))}`)

        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return { userAgent };
    }

    render() {
        return (
            <Layout>
                <div>
                    <Head>
                        <title>Et bien voilà ma fois c'est pratique nextJS ça permet de faire des sites moches</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <img src="/static/cacajava.svg"/>
                    <pre>{cowsay.say({ text: `Ute est russe! et ton navigateur c est ${this.props.userAgent}` })}</pre>
                </div>
            </Layout>
        )
    }
}

export default Ute