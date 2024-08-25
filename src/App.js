import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Cardone from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import Cardthree from './Components/Cardthree';
import Cardslider from './Components/Cardslider';
import Footer from './Components/Footer';



function App() {
  return (
    <div  >
     <Navbar/> 
     <Slider/>
     <Cardone/>
     <CardTwo/>
     <Cardthree/> 
     <Cardslider/>
     <Footer/>
    </div>
  );
}

export default App;
