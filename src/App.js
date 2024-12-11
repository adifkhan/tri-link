import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <div className="top_banner">
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default App;
