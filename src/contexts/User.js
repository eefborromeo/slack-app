import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({children}) {
    const [user, setUser] = useState({
        isLoggedIn: false
    })

    const handleLogin = () => {
        setUser({
            ...user,
            isLoggedIn: true
        })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    }, [])

    return (
        <UserContext.Provider value={{ user, handleLogin }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext};