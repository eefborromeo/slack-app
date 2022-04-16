import React, { useContext, useEffect, useState } from "react";
import { MessageContainer } from "../styles";
import Title from "./Title"
import SentMessages from "./SentMessages";
import MessageBox from "./MessageBox";
import { UserContext } from "../../contexts/User";
import { useParams } from "react-router-dom";


export default function Messages({ allUsers, isNewMessage, setIsNewMessage, channels}) {
    const { user: { receivers} } = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedChannel, setSelectedChannel] = useState({});
    const [sentMessage, setSentMessage] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setSelectedUser(receivers.find(receiver => receiver.id === parseInt(id)))
        setSelectedChannel(channels.find(channel => channel.id === parseInt(id)))
    }, [receivers, channels, id])

    return (
        <MessageContainer>
            <Title 
                allUsers={allUsers} 
                isNewMessage={isNewMessage} 
                setIsNewMessage={setIsNewMessage} 
                selectedUser={selectedUser}
                selectedChannel={selectedChannel} />
            {/* <SentMessages selectedUser={selectedUser} sentMessage={sentMessage} /> */}
            {/* <MessageBox selectedUser={selectedUser} setSentMessage={setSentMessage} /> */}
        </MessageContainer>
    )
}