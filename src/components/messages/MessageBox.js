import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/User";

import { BiSend } from "react-icons/bi"
import { MessageBoxLayout } from "../styles";

export default function MessageBox({selectedUser, setSentMessage}) {
    const [messageBody , setMessageBody] = useState('')
    const { user: { expiry, uid, accessToken, client } } = useContext(UserContext);
    if (!selectedUser) return;
    const headers = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }
    
    const body = {
        "receiver_id": selectedUser[0].id,
        "receiver_class": "User",
        "body": messageBody,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://206.189.91.54/api/v1/messages', body, { headers })
            .then(response => {
                const { data } = response.data
                setSentMessage(data)
                setMessageBody('')
            })
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        setMessageBody(e.target.value)
    }
 
    return (
        <MessageBoxLayout onSubmit={(e) => handleSubmit(e)}>
            <textarea value={messageBody} onChange={handleChange}></textarea>
            <button type="submit"><BiSend /></button>
        </MessageBoxLayout>
    )
}