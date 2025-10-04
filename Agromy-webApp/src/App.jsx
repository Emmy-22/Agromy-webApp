<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login.jsx';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Store from "./pages/Store.jsx";
import FAQ from "./pages/FAQ.jsx";
import RequestProduct from "./pages/RequestProduct.jsx";
import Help from "./pages/Help.jsx";
import Payment from "./pages/Payment.jsx";
import CancelOrder from "./pages/CancelOrder.jsx";
import Location from "./pages/Location.jsx";
import Otpverification from "./pages/OtpVerification.jsx"
import JoinUS from "./pages/JoinUs.jsx";
import "./App.css";
>>>>>>> bf84e29b659d2b8d279cba741113a2865a7d4d7f

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Login />
      <Routes>
        <Route path="/Login" element={<Login />} />
=======
      <Navbar />
      <Routes>
        <Route path="/otpverification" element={<Otpverification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/request-product" element={<RequestProduct />} />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cancel-order" element={<CancelOrder />} />
        <Route path="/join-us" element={<JoinUS />} />
>>>>>>> bf84e29b659d2b8d279cba741113a2865a7d4d7f
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> bf84e29b659d2b8d279cba741113a2865a7d4d7f
