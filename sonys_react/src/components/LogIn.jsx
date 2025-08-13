import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';

export const UserContext = createContext();

export const UsersProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

const LogIn = () => {
    return (
        <div>
            <form>

            </form>
            <Link to="/signIn">회원 가입해야 하면 클릭</Link>
        </div>
    );
};

export default LogIn;