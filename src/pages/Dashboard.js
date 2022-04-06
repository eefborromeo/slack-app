import React, { useContext } from "react";
import { FlexContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/User";

export default function Dashboard() {
   const { user } = useContext(UserContext);
   if (!user.isLoggedIn) {
       return <Navigate to="/" />
   }
    return (
        <FlexContainer>
            <Sidebar /> 
            <Messages />
        </FlexContainer>
    )
}