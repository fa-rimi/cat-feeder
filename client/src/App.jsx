import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewOrderPage from "../src/pages/NewOrderPage";
import OrderHistoryPage from "../src/pages/OrderHistoryPage";
import AuthPage from "../src/pages/AuthPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      {user ? (
        <div>
          <NavBar setUser={setUser} user={user} />
          <h1>Hello</h1>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}

export default App;
