import React, { useState } from "react";
import { MessageTitle, TitleContainer } from "../styles";
import UserList from "./UserList";

export default function Title({ allUsers, isNewMessage, setIsNewMessage, selectedUser }) {
    
    return (
        <MessageTitle>
            {isNewMessage ? 
                <UserList 
                    allUsers={allUsers} 
                    setIsNewMessage={setIsNewMessage}
                    /> :
                <TitleContainer>
                    <h2>{ selectedUser ? selectedUser[0].email : "Create or Select a Channel or Direct Message" }</h2>
                </TitleContainer>
            }
        </MessageTitle>
)}