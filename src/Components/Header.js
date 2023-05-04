import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext);       //context using
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost normal-case text-xl text-sky-300">Auth router context</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <span>Welcome, {user.displayName}</span>
            </div>
        </div>
    );
};

export default Header;