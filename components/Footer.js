import Nav from './Nav';

export default function Footer(){
    return (
        <footer>
            <Nav />
            <style jsx>{`
                nav {
                    background: #00a000;
                }
                h1 {
                    color: #ffffff;
                    text-align: center;
                }
            `}</style>
        </footer>
    )
}