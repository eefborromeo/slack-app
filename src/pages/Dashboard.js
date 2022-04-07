import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { FlexContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import { UserContext } from "../contexts/User";
import TopBar from "../components/topbar/TopBar";
import { ReceiverContextProvider } from "../contexts/Receiver";

export default function Dashboard() {
   const { user } = useContext(UserContext);
   const [allUsers, setAllUsers] = useState([]);
   const [isNewMessage, setIsNewMessage] = useState(false);
   const params = {
       "expiry": user.expiry,
       "uid": user.uid,
       "access-token": user.accessToken,
       "client": user.client,
   }

   const getAllUsers = async () => {
       let {data: {data}} = await axios.get("http://206.189.91.54/api/v1/users", { params })
       setAllUsers(data)
   } 

   useEffect(() => {
     getAllUsers();
    }, [])
   
   if (!user.isLoggedIn) {
       return <Navigate to="/" />
   }
    return (
        <>
            <TopBar />
            <FlexContainer>
                <Sidebar setIsNewMessage={setIsNewMessage} />
                <ReceiverContextProvider>
                    <Messages allUsers={allUsers} isNewMessage={isNewMessage} setIsNewMessage={setIsNewMessage} />
                </ReceiverContextProvider> 
            </FlexContainer>
        </>
    )
}