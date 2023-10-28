import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
  </Routes>
  
  </>
  );
}

export default App;
