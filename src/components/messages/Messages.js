import React from "react";
import { MessageContainer } from "../styles";
import Title from "./Title"
import SentMessages from "./SentMessages";
import MessageBox from "./MessageBox";


export default function Messages({ allUsers, isNewMessage, setIsNewMessage }) {
    return (
        <MessageContainer>
            <Title allUsers={allUsers} isNewMessage={isNewMessage} setIsNewMessage={setIsNewMessage} />
            <SentMessages />
            <MessageBox />
        </MessageContainer>
    )
}