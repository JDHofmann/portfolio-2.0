import Head from 'next/head'
import Header from './Header'

export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>JD Brewer-Hofmann</title>
                <description>Portfolio Site for JD Brewer-Hofmann</description>
            </Head>
            <Header />
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    )
}