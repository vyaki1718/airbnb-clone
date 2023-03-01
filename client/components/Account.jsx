import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { UserContext } from "../src/UserContext";
import Places from "./pages/Places";

function Account() {
    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = "profile"
    }

    async function logout() {
        await axios.post('/logout');
        setUser(null);
        setRedirect(true);

    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    if (!ready) {
        return "Loading...."
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    //  console.log(subpage)

    function LinkClasses(type = null) {
        let classes = "inline-flex gap-1 py-2 px-6";

        if (type === subpage) {
            classes += " bg-primary text-white rounded-full"
        }else{
            classes += " bg-gray-200 rounded-full"
        }

        return classes;
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
                <Link className={LinkClasses('profile')} to={'/account'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    My profile
                </Link>
                <Link className={LinkClasses("bookings")} to={'/account/bookings'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    My bookings
                </Link>
                <Link className={LinkClasses("places")} to={'/account/places'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>

                    My Accommodations
                    </Link>
            </nav>
            {
                subpage === "profile" && (
                    <div className="text-center max-w-lg mx-auto">
                        Logged in as {user.name} {user.email}
                        <button className="primary max-w-ms mt-2" onClick={logout}>logout</button>
                    </div>
                )
            }
            {
                subpage === "places" && (<Places />)
            }
        </div>
    )
}

export default Account;