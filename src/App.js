import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import AllRoutes from './allRoutes/AllRoute'
import Hero from './pages/hero/Hero';
import Footer from './pages/footer/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
