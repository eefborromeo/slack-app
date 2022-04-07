import React from "react";
import { SidebarStyles, GroupName } from "../styles";
import { BsPencilSquare } from "react-icons/bs";

import Channels from "./Channels";
import DMs from "./DMs";

export default function Sidebar({ setIsNewMessage }) {

    const handleNewMessage = () => {
        setIsNewMessage(true);
    }

    return (
        <SidebarStyles>
            <GroupName>
                <h1>Avion School</h1>
                <BsPencilSquare onClick={handleNewMessage} />
            </GroupName>
            <div>
                <Channels />
                <DMs />
            </div>
        </SidebarStyles>
    )
}