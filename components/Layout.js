import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'

export default function Layout({children}){
    const path = useRouter();
    const pathname = path.pathname.slice(1);
    return(
        <div>
            <Head>
                <title>JDBH {pathname}</title>
                <meta name="description" content="Portfolio Site for JD Brewer-Hofmann"/>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}