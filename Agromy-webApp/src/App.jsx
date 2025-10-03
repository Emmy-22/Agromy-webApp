import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login.jsx';

function App() {

  return (
    <Router>
      <Login />
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
