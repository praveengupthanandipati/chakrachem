import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./includes/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
