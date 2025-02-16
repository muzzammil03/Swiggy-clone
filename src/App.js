import './App.css';
// import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
// import OnlineDelivery from './components/OnlineDelivery.jsx';
// import TopResturant from './components/TopResturant.jsx';
import Search from './routes/Search.jsx';
import SignIn from './routes/SignIn.jsx';
import Help from './routes/Help.jsx';
import { useState } from 'react';
import  Home  from './routes/Home.jsx';
import { Routes, Route } from "react-router-dom";
import Offers from './routes/Offers.jsx';
import Cart from './routes/Cart.jsx';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
   <Header setIsOpen={setIsOpen}/>
   <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
   {/* <Search/> */}
   {/* <Help/> */}
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/search" element={<Search />} />
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/cart" element={<Cart/>}/>
       

      </Routes>
   </>
  );
}
{/* <Route path="/offers" element={<About />} /> */}
export default App;
