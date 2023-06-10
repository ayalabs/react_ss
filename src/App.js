import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Layout from "./component/Layout";
import Profile from "./pages/Profile";
import Win from "./pages/Win";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="detail" element={<Detail />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="win" element={<Win />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
