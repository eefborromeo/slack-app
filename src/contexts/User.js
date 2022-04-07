import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({children}) {
    const [user, setUser] = useState({
        currentUser: '',
        isLoggedIn: false
    })
    
    const handleLogin = (userEmail) => {
        setUser({
            ...user,
            currentUser: userEmail,
            isLoggedIn: true
        })
    }

    const handleLogout = () => {
        setUser({
            ...user,
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