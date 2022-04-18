import React from "react";
import { MessageLayout } from "../styles";

export default function Message({ message }) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const date = new Date(message.created_at).toLocaleDateString('en-US', options);

    const initial = message.sender.uid.charAt(0)

    return (
        <MessageLayout>
            <span>{date}</span>
            <div>
                <img src={`https://avatars.dicebear.com/api/initials/${initial}.svg?size=50`} alt={message.sender.uid} />
                <div>
                    <h5>{message.sender.uid}</h5>
                    <p>{message.body}</p>
                </div>
            </div>
        </MessageLayout>
    )
}