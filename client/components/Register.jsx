import react, { useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios';



function Register(){
   const  [name,setName]=useState("");
   const  [email,setEmail]=useState('');
   const   [password,setPassword]=useState('');
 



   async function registerUser(e){
     e.preventDefault();
   try{
   await  axios.post('/register', {
        name,
        email,
        password
     })
     alert("Restration successful")
    }catch(e){
        alert("Registration failed. Please try again")
        console.log(e)
    }
   }

    return (

        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" >
                <input type="text" placeholder="Enter Name" 
                       value={name} 
                       onChange={e=>setName(e.target.value)}
                    />

                <input type="email" placeholder="your@mail.com" 
                       value={email}
                       onChange={e=>setEmail(e.target.value)}/>

                <input type="password"  placeholder="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)} />
                <button className="primary" onClick={registerUser}>Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member?  <Link className="underline text-black" to={'/Login'}>Login</Link>
                </div>
            </form>
            
            
            </div>
        </div>
    )
}

export default Register;