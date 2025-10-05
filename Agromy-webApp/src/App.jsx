import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Store from "./pages/Store.jsx";
import FAQ from "./pages/FAQ.jsx";
import JoinUS from "./pages/JoinUs.jsx";
import Login from "./pages/Login.jsx";
import RequestProduct from "./pages/RequestProduct.jsx";
import Help from "./pages/Help.jsx";
import Location from "./pages/Location.jsx";
import Payment from "./pages/Payment.jsx";
import CancelOrder from "./pages/CancelOrder.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/request-product" element={<RequestProduct />} />
        <Route path="/help" element={<Help />} />
        <Route path="/location" element={<Location />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/join-us" element={<JoinUS />} />
        <Route path="/cancel-order" element={<CancelOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
