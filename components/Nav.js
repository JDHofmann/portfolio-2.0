import Link from 'next/link';

export default function Nav({classProp, ariaProp}){
    return(
        <nav 
            className={classProp}
            aria-label={ariaProp}
        >
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}