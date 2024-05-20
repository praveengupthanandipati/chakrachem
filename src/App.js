import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
