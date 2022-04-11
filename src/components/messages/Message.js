import React from "react";
import { MessageLayout } from "../styles";

export default function Message({ message }) {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const date = new Date(message.created_at).toLocaleDateString('en-US', options);

    return (
        <MessageLayout>
            <span>{date}</span>
            <div>
                <h5>{message.sender.uid}</h5>
                <p>{message.body}</p>
            </div>
        </MessageLayout>
    )
}