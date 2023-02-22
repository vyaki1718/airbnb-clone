
import {Routes, Route} from 'react-router-dom'
import Header  from "../components/Header";
import LoginPage from '../components/LoginPage';
import Layout from '../components/Layout';
import IndexPage from '../components/pages/IndexPage';
import Register from '../components/Register';
function App(){

  return(
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<IndexPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
     
  )
}

export default App;