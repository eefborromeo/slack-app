import { createContext, useEffect, useState } from "react";

const ReceiverContext = createContext();

function ReceiverContextProvider({children}) {
    const [receiver, setReceiver] = useState(JSON.parse(localStorage.getItem('receiver')))
    
    const handleSetReceiver = (id) => {
        setReceiver({ id })
    }
    
    // useEffect(() => {
    //     const userData = JSON.parse(localStorage.getItem('user'))
    //     setUser(userData)
    // }, [])
    
    useEffect(() => {
        localStorage.setItem('receiver', JSON.stringify(receiver))
    }, [receiver])


    return (
        <ReceiverContext.Provider value={{ receiver, handleSetReceiver }}>
            {children}
        </ReceiverContext.Provider>
    )
}

export {ReceiverContextProvider, ReceiverContext};