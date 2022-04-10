import React, { useState, useContext, useEffect} from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/User";

import { FlexContainer, MessageContainer, MessagesStyles, MessageLayout } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import TopBar from "../components/topbar/TopBar";
import Title from "../components/messages/Title";


export default function Dashboard() {
    const { user: { isLoggedIn, receivers} } = useContext(UserContext);
    const [allUsers, setAllUsers] = useState([]);
    const [isNewMessage, setIsNewMessage] = useState(false);
 
    if (!isLoggedIn) {
        return <Navigate to="/" />
    }

    return (
        <>
            <TopBar />
            <FlexContainer>
                    <Sidebar 
                    setIsNewMessage={setIsNewMessage} 
                    setAllUsers={setAllUsers}
                    />
                    <Routes>
                        <Route path=":id" element={
                            <Messages 
                                allUsers={allUsers}
                                isNewMessage={isNewMessage} 
                                setIsNewMessage={setIsNewMessage} 
                                />
                        } />
                        <Route path="/" element={
                            <MessageContainer>
                                  <Title 
                                    allUsers={allUsers} 
                                    isNewMessage={isNewMessage} 
                                    setIsNewMessage={setIsNewMessage}
                                    />
                            </MessageContainer>
                        } />
                    </Routes>
            </FlexContainer>
        </>
    )
}