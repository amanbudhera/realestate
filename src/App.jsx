import Companies from "./components/companies/Companies";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import GetStarted from "./components/getStarted/GetStarted";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/values/Value";
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
