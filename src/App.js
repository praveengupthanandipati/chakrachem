import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
