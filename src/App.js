import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Teams from './pages/team';
import Services from './pages/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' element={<About />} exact/>
        <Route path='/team' element={<Teams />} exact/> 
        <Route path='/services' element={<Services />} exact/>   
        <Route path='/contact' element={<Contact />} exact/>        
     
      </Routes>
    </Router>
  );
}

export default App;
