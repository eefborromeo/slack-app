import React, { useState } from "react";
import { MessageTitle, TitleContainer } from "../styles";
import UserList from "./UserList";

export default function Title({ allUsers, isNewMessage, setIsNewMessage }) {
    const [title, setTitle] = useState('');

    return (
        <MessageTitle>
            {isNewMessage ? 
                <UserList allUsers={allUsers} setTitle={setTitle} setIsNewMessage={setIsNewMessage} /> :
                <TitleContainer>
                    <h2>{ title }</h2>
                </TitleContainer>
            }
        </MessageTitle>
)}