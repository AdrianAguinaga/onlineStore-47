
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import QuantityPicker from './components/quantityPicker';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>  
     <h1>Hello from React</h1>
     <Footer></Footer>     
     <QuantityPicker></QuantityPicker>
    
    </div>
  );
}

export default App;
