import { BrowserRouter, Route, Routes } from "react-router-dom"
import LogIn, { UsersProvider } from "./components/LogIn";
import SignIn from "./components/signIn";
import GuestBook from "./components/GuestBook";
import YsDict from "./components/ysDict";
import Rendezvous from "./components/Rendezvous";
import NavBar from "./NavBar";
import Home from "./Home";

const App = () => {
  return (
    <UsersProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/:id/Home' element={<Home />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/:id/GuestBook' element={<GuestBook />}></Route>
          <Route path='/:id/YsDict' element={<YsDict />}></Route>
          <Route path='/:id/Rendezvous' element={<Rendezvous />}></Route>
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
};
export default App;