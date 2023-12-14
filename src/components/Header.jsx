import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <header>
       <NavLink to='/'>Home</NavLink>
       <nav>
        <ul>
        <li><NavLink to='/palindrome'>Palindrome</NavLink></li>
        <li><NavLink to='/sort'>Bubble sort/Selection sort</NavLink></li>
        <li><NavLink to='/stack'>Stack data structure</NavLink></li>
        </ul>
       </nav>
    </header>
    );
};

export default Header;