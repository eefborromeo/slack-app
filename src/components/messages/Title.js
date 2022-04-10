import React from "react";
import { MessageTitle, TitleContainer } from "../styles";
import UserList from "./UserList";

export default function Title({ allUsers, isNewMessage, setIsNewMessage }) {

    return (
        <MessageTitle>
            {isNewMessage ? 
                <UserList 
                    allUsers={allUsers} 
                    setIsNewMessage={setIsNewMessage}
                    /> :
                <TitleContainer>
                    <h2>{ "Create or Select a Channel or Direct Message"}</h2>
                </TitleContainer>
            }
        </MessageTitle>
)}