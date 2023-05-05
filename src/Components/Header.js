import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);       //context using

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log('Logout successful')
        })
        .catch(error => console.error(error))  
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost normal-case text-xl text-sky-300">Auth router context</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                <button onClick={handleLogOut} className='btn btn-sm'>Log Out</button>
            </div>
        </div>
    );
};

export default Header;