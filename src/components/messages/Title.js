import React, { useState } from "react";
import { MessageTitle, TitleContainer } from "../styles";
import UserList from "./UserList";
import {GoKebabHorizontal} from "react-icons/go"

export default function Title({ allUsers, isNewMessage, setIsNewMessage, selectedUser, selectedChannel, setIsModalShow, setIsChannelInfo }) {
    const handleChannelInfo = () => {
        setIsModalShow(true);
        setIsChannelInfo(true);
    }

    return (    
        <MessageTitle>
            {isNewMessage ? 
                <UserList 
                    allUsers={allUsers} 
                    setIsNewMessage={setIsNewMessage}
                    /> :
                <TitleContainer>
                    <h2>{ selectedUser ? selectedUser.email : selectedChannel ? selectedChannel.name : "Create or Select a Channel or Direct Message"}</h2>
                    {selectedChannel && <GoKebabHorizontal onClick={handleChannelInfo}/>}
                </TitleContainer>
            }
        </MessageTitle>
)}