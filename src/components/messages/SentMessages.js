import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { MessagesStyles, MessageLayout } from "../styles";
import Message from "./Message";

export default function SentMessages({ selectedUser, sentMessage, selectedChannel }) {
    const [messagesData, setMessagesData] = useState([]);
    const { user: { expiry, uid, accessToken, client } } = useContext(UserContext);
    const params = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }

    const getDirectMessages = async () => {
        let {data: {data}} = await axios.get(`http://206.189.91.54/api/v1/messages?receiver_id=${selectedUser?.id}&receiver_class=User`, { params })
        setMessagesData(data);
    }
    
    const getChannelMessages = async () => {
        let {data: {data}} = await axios.get(`http://206.189.91.54/api/v1/messages?receiver_id=${selectedChannel?.id}&receiver_class=Channel`, { params })
        setMessagesData(data)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedUser) {
                getDirectMessages();
            } else {
                getChannelMessages();
            }
          }, 500);

          return () => clearInterval(interval);
        }, [selectedUser, selectedChannel, sentMessage])
    
    return (
        <MessagesStyles>
            <MessageLayout>
            <h3>This is the start of your messages</h3>
            </MessageLayout>
            {messagesData?.map(messages => <Message key={messages.id} message={messages} />)}
        </MessagesStyles>
    )
}