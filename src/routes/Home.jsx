import '../index.css';
import { Link } from "react-router-dom";

function Home () {
    return (
        <main>
        <div><h1>Apps:</h1></div>
        <div>
        <Link to='/palindrome'>Palindrome</Link>
        <Link to='/sort'>Bubble sort/Selection sort</Link>
        <Link to='/stack'>Stack data structure</Link>
        </div>
        </main>
    );
}

export default Home;