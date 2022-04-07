import React from "react";
import { MessageContainer } from "../styles";
import Title from "./Title"
import SentMessages from "./SentMessages";
import MessageBox from "./MessageBox";


export default function Messages() {
    return (
        <MessageContainer>
            <Title />
            <SentMessages />
            <MessageBox />
        </MessageContainer>
    )
}