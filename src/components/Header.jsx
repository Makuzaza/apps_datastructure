import { NavLink } from "react-router-dom";

const Header = () => {
    return (
       
    <header> 
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
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