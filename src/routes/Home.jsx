// import './App.css';
import Category from '../components/Category.jsx';
import Footer from '../components/Footer.jsx';
import InfoCards from '../components/InfoCards.jsx';
import OnlineDelivery from '../components/OnlineDelivery.jsx';
import TopResturant from '../components/TopResturant.jsx';

function Home() {
    
    return (
     <>
     <Category/>
     <TopResturant heading="Top restaurant chains in Bhopal"/>
     <OnlineDelivery heading="Restaurans with online food delivery in Bhopal"/>
     <InfoCards/>
     <Footer/>
     </>
    );
  }
  
  export default Home;