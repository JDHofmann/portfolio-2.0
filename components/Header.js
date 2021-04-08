import Nav from './Nav';

export default function Header(){
    return (
        <header>
            <Nav 
                classProp="main-menu"
                ariaProp="main menu"
            />
        </header>
    )
}