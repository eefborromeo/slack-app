import React, { useState, useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/User";

import { FlexContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import TopBar from "../components/topbar/TopBar";
import { ReceiverContextProvider } from "../contexts/Receiver";

export default function Dashboard() {
    const { user } = useContext(UserContext);
   const [allUsers, setAllUsers] = useState([]);
   const [isNewMessage, setIsNewMessage] = useState(false);
   
   if (!user.isLoggedIn) {
       return <Navigate to="/" />
   }
    return (
        <>
            <TopBar />
            <FlexContainer>
                <Sidebar setIsNewMessage={setIsNewMessage} setAllUsers={setAllUsers} />
                <ReceiverContextProvider>
                    <Messages allUsers={allUsers} isNewMessage={isNewMessage} setIsNewMessage={setIsNewMessage} />
                </ReceiverContextProvider> 
            </FlexContainer>
        </>
    )
}