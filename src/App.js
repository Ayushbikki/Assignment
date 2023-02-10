//import logo from './logo.svg';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Data from './components/Data';

function App() {


  return (
    <div className="App">
<ul className="nav bg-light justify-content-end">
      <li className="nav-item">
         <Link to ="/home" className="nav-link">Home</Link> 

      </li>
    
      <li className="nav-item">
      <Link to ="/login" className="nav-link" >Login</Link>
      </li> 
      {/* <li className="nav-item">
      <Link to ="/data" className="nav-link">Data</Link>
      </li> */}
      
      </ul>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/data" element={<Data />} />
    </Routes>

    
      
    </div>
  );
}

export default App;
