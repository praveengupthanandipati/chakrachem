import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Products from "./pages/Products";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./Admin/pages/login";

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
          <Route exact path="Products" Component={Products}/>
          <Route exact path = "ProductsList" Component={ProductsList}/>
          <Route exact path = "ProductDetail" Component={ProductDetail}/>
          <Route exact path = "Admin" Component={Login}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
