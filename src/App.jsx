import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PropertiesPage from "./Components/PropertiesPage/PropertiesPage";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
