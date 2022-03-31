import React from "react";
import { MessageContainer, MessagesStyles, MessageLayout, MessageBox } from "../styles";
import { BiSend } from "react-icons/bi"
import Title from "./Title"
import Message from "./Message";

export default function Messages() {
    return (
        <MessageContainer>
            <Title />
            <MessagesStyles>
                <MessageLayout>
                <h3>This is the start of your messages</h3>
                </MessageLayout>
                <Message />
            </MessagesStyles>
            <MessageBox>
                <textarea></textarea>
                <button type="submit"><BiSend /></button>
            </MessageBox>
        </MessageContainer>
    )
}