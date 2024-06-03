import "./App.css";
import Main from "./components/Pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./components/Pages/LoginPage";
import CartItems from "./components/Pages/CartItems";

function App() {
  return (
    <>
      <Router>
        {" "}
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/cartitems" element={<CartItems />} />
          <Route path="/loginpage" element={<Loginpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
