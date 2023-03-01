import axios from "axios";
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../src/UserContext";
function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext)


    async function loginHandler(e) {
        e.preventDefault();

        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            setUser(data)
            alert("login successful");
            setRedirect(true)
        } catch (e) {
            console.log(e)
            alert("login unsuccessfull")
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (

        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" >
                    <input type="email" placeholder="your@mail.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <button className="primary" onClick={loginHandler}>Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage