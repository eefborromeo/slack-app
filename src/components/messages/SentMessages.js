import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { MessagesStyles, MessageLayout } from "../styles";
import Message from "./Message";

export default function SentMessages({ selectedUser, sentMessage }) {
    const [messagesData, setMessagesData] = useState([]);
    const { user: { expiry, uid, accessToken, client } } = useContext(UserContext);
    const params = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }

    const getMessages = async () => {
        if (selectedUser) {
            let {data: {data}} = await axios.get(`http://206.189.91.54/api/v1/messages?receiver_id=${selectedUser[0].id}&receiver_class=User`, { params })
            setMessagesData(data);
        }
    }

    useEffect(() => {
        getMessages()
    }, [selectedUser, sentMessage])
    
    return (
        <MessagesStyles>
            <MessageLayout>
            <h3>This is the start of your messages</h3>
            </MessageLayout>
            {
                messagesData.map(message => <Message key={message.id} message={message} />)
            }
        </MessagesStyles>
    )
}