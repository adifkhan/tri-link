import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Logistics from "./components/logistics/Logistics";
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
      <div style={{ height: "100vh", background: "red" }}></div>
    </div>
  );
}

export default App;
