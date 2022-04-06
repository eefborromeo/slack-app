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
    
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])


    return (
        <UserContext.Provider value={{ user, handleLogin }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext};