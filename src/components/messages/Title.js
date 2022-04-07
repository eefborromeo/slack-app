import React from "react";
import { MessageTitle, TitleContainer } from "../styles";
import UserList from "./UserList";

export default function Title({ children }) {
    return (
        <MessageTitle>
            <TitleContainer>
                <h2>Title</h2>
            </TitleContainer>
            <UserList />
        </MessageTitle>
)
}