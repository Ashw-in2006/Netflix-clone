import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  );
}
export default App;
