import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
     
     <nav className='header'>
      <ul className='seema'>
        <li>
          
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="service">Service</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
     </nav>
      
     
    </div>
  );
}

export default App;
