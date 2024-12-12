import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Logistics from "./components/logistics/Logistics";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <div className="top_banner">
        <Header />
        <Banner />
      </div>
      <Services />
      <Logistics />
    </div>
  );
}

export default App;
