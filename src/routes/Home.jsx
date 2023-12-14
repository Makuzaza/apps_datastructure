import '../index.css';
import { Link } from "react-router-dom";

function Home () {
    return (
        <main>
        <div><h1>Apps:</h1></div>
        <p>Choose application:</p>
        <div className='items'>
        <div className='palindrome'><Link to='/palindrome'>Palindrome</Link></div>
        <div className='sort'><Link to='/sort'>Bubble sort/Selection sort</Link></div>
        <div className='stack'><Link to='/stack'>Stack data structure</Link></div>
        </div>
        </main>
    );
}

export default Home;