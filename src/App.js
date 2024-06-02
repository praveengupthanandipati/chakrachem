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
import AdminLayout from "./Admin/AdminLayout";
import AdminHeader from "./Admin/AdminHeader";
import AdminFooter from "./Admin/AdminFooter";
import AdminDashboard from "./Admin/pages/AdminDashboard"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="About"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="Services"
            element={
              <>
                <Header />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="Careers"
            element={
              <>
                <Header />
                <Careers />
                <Footer />
              </>
            }
          />
          <Route
            path="Contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="Terms"
            element={
              <>
                <Header />
                <Terms />
                <Footer />
              </>
            }
          />
          <Route
            path="Products"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            path="ProductsList"
            element={
              <>
                <Header />
                <ProductsList />
                <Footer />
              </>
            }
          />
          <Route
            path="ProductDetail"
            element={
              <>
                <Header />
                <ProductDetail />
                <Footer />
              </>
            }
          />

          <Route
            path="Admin"
            element={<Login />}
          />
          <Route
            path="Admin/Dashboard"
            element={
              <AdminLayout>
                <AdminHeader />
                <AdminDashboard />
                <AdminFooter />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
