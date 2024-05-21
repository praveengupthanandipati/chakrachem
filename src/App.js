import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="About" Component={About} />
          <Route exact path="Services" Component={Services} />
          <Route exact path="Careers" Component={Careers} />
          <Route exact path="Contact" Component={Contact} />
          <Route exact path="Terms" Component={Terms}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
