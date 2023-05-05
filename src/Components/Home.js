import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>This is home for Mr. {user?.email}</h3>
        </div>
    );
};

export default Home;