import Landing from "./Components/Landing";
import Header from "./Components/Header";
import Apps from "./Components/Apps";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Signup />
      <Apps />
      <Footer />
    </div>
  );
}

export default App;
