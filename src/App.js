import './App.css';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <div className="App">
        <Home></Home>
    
    </div>
  );
}

export default App;
