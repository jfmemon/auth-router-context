import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    const userName = user.displayName;
    return (
        <div>
            <h3>This is home for Mr. {userName}</h3>
        </div>
    );
};

export default Home;