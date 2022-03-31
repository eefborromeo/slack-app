import React from "react";
import { FlexContainer } from "../components/styles";
import Sidebar from "../components/sidebar/Sidebar";
import Messages from "../components/messages/Messages";

export default function Dashboard() {
    return (
        <FlexContainer>
            <Sidebar /> 
            <Messages />
        </FlexContainer>
    )
}