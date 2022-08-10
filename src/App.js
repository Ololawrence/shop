import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Components/Navigation/Navigation";
import Cart from "./Components/Cart/Cart";
import Landing from "./Components/LandingPage/Landing";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Lgin";
import Footer from "./Components/Footer/footer";
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Fashion from "./Components/Pages/Fashion/Fashion";
import Women from './Components/Pages/Fashion/women';
import Men from './Components/Pages/Fashion/men';
import Girls from './Components/Pages/Fashion/girls';
import Boys from './Components/Pages/Fashion/boys';
import Babies from './Components/Pages/Fashion/babies';
import FashionDetailsPage from './Components/Pages/Fashion/fashionDetailsPage';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer />
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/boys" element={<Boys />} />
            <Route path="/babies" element={<Babies />} />
            <Route path="/details" element={<FashionDetailsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
