import './App.css';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import OnlineDelivery from './components/OnlineDelivery.jsx';
import TopResturant from './components/TopResturant.jsx';
import Search from './routes/Search.jsx';
function App() {
  return (
   <>
   <Header/>
   <Category/>
   <TopResturant/>
   <OnlineDelivery/>
   <Footer/>

   {/* <Search/> */}
   </>
  );
}

export default App;
