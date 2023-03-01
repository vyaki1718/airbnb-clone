
import { Routes, Route } from 'react-router-dom'
import Header from "../components/Header";
import LoginPage from '../components/LoginPage';
import Layout from '../components/Layout';
import IndexPage from '../components/pages/IndexPage';
import Register from '../components/Register';
import Account  from '../components/Account';
import { UserContextProvider } from './UserContext';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials=true; 
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path='/account/:subpage?' element={<Account/>}/>
          {/* <Route path='/account/bookings' element={<Account/>}/> */}
          {/* <Route path='/account/places' element={<Account/>}/> */}
          <Route path='/account/:subpage/:action' element={<Account/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
  )
}

export default App;