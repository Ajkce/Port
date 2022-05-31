
import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navabr/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";



function App() {
  return (
    <div className="App">
     
        <div className="landing">
          <div className="landing-bg">
            

          <Navbar/>
          
          <Home/>
          <About/>
        
          <Education/>
         
            
          
        </div>
      </div>
      <Portfolio/>
      <Contact/>
      <div className="landing">
          <div className="landing-bg">
            <Footer/>
            </div>
          </div>
    </div>
  );
}

export default App;
