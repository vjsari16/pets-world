import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route , Link , Switch, Routes, Form } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Freshjuice from './screens/Freshjuice';
import Home from './screens/Home';
import form from './admin/form';
import Mainscreen from './screens/Mainscreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Mainscreen}/>
          <Route path="/cart" exact Component={Cartscreen}/>
          <Route path="/login" exact Component={Loginscreen}/>
          <Route path="/Drinks" exact Component={Freshjuice}/>
          <Route path="/Products" exact Component={Homescreen}/>
          <Route path="/home" exact Component={Home}/>
          <Route path="/add" exact Component={form}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
