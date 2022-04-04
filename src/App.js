import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import BdAddress from './components/Contact/BdAddress';
import UsAddress from './components/Contact/UsAddress';
import Coins from './components/Coins/Coins';
import CoinDetails from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
