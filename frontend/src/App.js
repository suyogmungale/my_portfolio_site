import logo from './logo.svg';
//import './App.css';
import './index.css'
import './App.scss'
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
//import { Navbar } from './componants';
import Navbar from './componants/Navbar/Navbar'


function App() {
  return (
    <div className="app">
    <Navbar/>
    <About/>
    <Footer/>
    <Header/>
    <Skills/>
    <Testimonial/>
    <Work/>
    </div>
  );
}

export default App;
