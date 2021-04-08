import Link from 'next/link';

export default function Nav({classProp}){
    return(
        <nav className={classProp}>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}