import React from "react";
import { MessagesStyles, MessageLayout } from "../styles";
import Message from "./Message";

export default function SentMessages() {
    return (
        <MessagesStyles>
            <MessageLayout>
            <h3>This is the start of your messages</h3>
            </MessageLayout>
            <Message />
        </MessagesStyles>
    )
}