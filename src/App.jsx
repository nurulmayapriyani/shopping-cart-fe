import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./page/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Cart />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
