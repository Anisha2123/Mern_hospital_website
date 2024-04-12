
import './App.css';
import Signup from './signup';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import Reviews from './Reviews'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clinic from './Clinic';
import Footer from './Footer';
import Profile from './Profile';
import Form from './Form';
import Services from './Services';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/clinic' element={<Clinic />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
       
        <Route path='/form' element={<Form />}></Route>
        </Routes>
        </BrowserRouter>
      {/* <Signup /> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
