import React from "react";
import { MessageContainer, MessageTitle, MessagesStyles, Message, MessageBox } from "./styles";
import { BiSend } from "react-icons/bi"

export default function Messages() {
    return (
        <MessageContainer>
            <MessageTitle>
                <h1>Eloisa</h1>
            </MessageTitle>
            <MessagesStyles>
                <Message>
                <h3>This is the start of your messages</h3>
                </Message>
                <Message>
                <span>Thursday, March 31st</span>
                <div>
                    <h5>Name</h5>
                    <p>Hello</p>
                </div>
                </Message>
            </MessagesStyles>
            <MessageBox>
                <textarea></textarea>
                <button type="submit"><BiSend /></button>
            </MessageBox>
        </MessageContainer>
    )
}