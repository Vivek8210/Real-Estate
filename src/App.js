import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import AllRoutes from './allRoutes/AllRoute'
import Hero from './pages/hero/Hero';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <AllRoutes/>
    
    </div>
  );
}

export default App;
