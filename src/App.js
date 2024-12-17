import "./App.css";
import Banner from "./components/banner/Banner";
import CloserLook from "./components/closer-look/CloserLook";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logistics from "./components/logistics/Logistics";
import RetailProducts from "./components/retail-products/RetailProducts";
import Services from "./components/services/Services";
import Transport from "./components/transport/Transport";

function App() {
  return (
    <div>
      <div className="top_banner">
        <Header />
        <Banner />
      </div>
      <Services />
      <Logistics />
      <Transport />
      <RetailProducts />
      <Contact />
      <CloserLook />
      <Footer />
    </div>
  );
}

export default App;
