import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import NavbarComponent from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
// import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/about' element={}/> */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
