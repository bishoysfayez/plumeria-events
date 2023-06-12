import "./App.css";
import About from "./About/About";
import Contact from "./Contact/Contact.jsx";
import Portfolio from './Landing/Portfolio/Portfolio.jsx'
import Caro from './Landing/Carousel/Carousel.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Footer from "./Footer/Footer";

function App() {
  return (
    
    <>
    <Navbar />
      <div className="container mx-auto my-4 p-2 text-center">
        <Caro />
      </div>
      <div className="container mx-auto my-4 p-2 text-center">
        <Portfolio />
      </div>
      <div className="container mx-auto my-2 p-2 text-center">
        <About /> 
      </div>
      <div className="container mx-auto my-2 p-2 text-center">
        <Contact />
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </>
  );
}

export default App;
