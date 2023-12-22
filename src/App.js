import './styles/Global.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hotelrooms from './pages/Hotels/Hotelrooms';
import HomePage from './pages/Home/HomePage';
import BookingPage from './pages/Hotels/BookingPage';
import SigninPage from './pages/Signin/SigninPage';
import SignupPage from './pages/Signup/SignupPage';
import User from './pages/Account/User';
import Adminpage from './pages/Admin/Adminpage';
import Landingpage from './pages/Landingpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Landingpage} />
          <Route path='/homepage' Component={HomePage} />
          <Route path='/hotelrooms' Component={Hotelrooms} />
          <Route path='/book/:roomid/:fromdate/:todate' Component={BookingPage} />
          <Route path='/user' Component={User} />
          <Route path='/signin' Component={SigninPage} />
          <Route path='/signup' Component={SignupPage} />
          <Route path='/admin' Component={Adminpage} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
