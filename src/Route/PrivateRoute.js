import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;