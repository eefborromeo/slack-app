import React, { useState, useContext} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/User";

import { FlexContainer, MessageContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import TopBar from "../components/topbar/TopBar";
import Title from "../components/messages/Title";
import Modal from "../components/modal/Modal";
import NewChannel from "../components/modal/NewChannel";


export default function Dashboard() {
    const { user: { isLoggedIn } } = useContext(UserContext);
    const [allUsers, setAllUsers] = useState([]);
    const [channels, setChannels] = useState([]);
    const [isNewMessage, setIsNewMessage] = useState(false);
    const [isModalShow, setIsModalShow] = useState(false);
    const [isChannelInfo, setIsChannelInfo] = useState(false);
 
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
                        setIsModalShow={setIsModalShow}
                        channels={channels}
                        setChannels={setChannels}
                    />
                    <Routes>
                        <Route path="/:id" element={
                            <Messages 
                                allUsers={allUsers}
                                isNewMessage={isNewMessage} 
                                setIsNewMessage={setIsNewMessage}
                                channels={channels}
                                setIsModalShow={setIsModalShow}
                                setIsChannelInfo={setIsChannelInfo}
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
                    <Modal isModalShow={isModalShow} setIsModalShow={setIsModalShow} setIsChannelInfo={setIsChannelInfo}>
                       { 
                           isChannelInfo ? 
                            <div>Channel Info</div> :
                            <NewChannel allUsers={allUsers} />
                       }
                    </Modal>
            </FlexContainer>
        </>
    )
}