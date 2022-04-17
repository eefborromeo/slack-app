import React, { useState, useContext} from "react";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/User";

import { FlexContainer, MessageContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";
import TopBar from "../components/topbar/TopBar";
import Title from "../components/messages/Title";
import Modal from "../components/modal/Modal";
import NewChannel from "../components/modal/NewChannel";
import ChannelInfo from "../components/modal/ChannelInfo";


export default function Dashboard() {
    const { user: { expiry, uid, accessToken, client, isLoggedIn } } = useContext(UserContext);
    const [allUsers, setAllUsers] = useState([]);
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState({});
    const [isNewMessage, setIsNewMessage] = useState(false);
    const [isModalShow, setIsModalShow] = useState(false);
    const [isChannelInfo, setIsChannelInfo] = useState(false);
    const params = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }
 
    if (!isLoggedIn) {
        return <Navigate to="/" />
    }

    const getAllUsers = async () => {
        let {data: {data}} = await axios.get("http://206.189.91.54/api/v1/users", { params })
        setAllUsers(data)
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
                        getAllUsers={getAllUsers}
                        params={params}
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
                                selectedChannel={selectedChannel}
                                setSelectedChannel={setSelectedChannel}
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
                            <ChannelInfo selectedChannel={selectedChannel} getAllUsers={getAllUsers} allUsers={allUsers} /> :
                            <NewChannel allUsers={allUsers} />
                       }
                    </Modal>
            </FlexContainer>
        </>
    )
}