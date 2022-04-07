import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    
    const handleLogin = (uid, accessToken, client, userEmail) => {
        setUser({
            uid, 
            accessToken,
            client,
            currentUser: userEmail,
            isLoggedIn: true
        })
    }

    const handleLogout = () => {
        setUser({
            uid: '', 
            accessToken: '',
            client: '',
            currentUser: '',
            isLoggedIn: false
        })
    }
    
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])


    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext};