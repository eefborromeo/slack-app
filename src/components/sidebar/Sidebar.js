import React from "react";
import { SidebarStyles, GroupName } from "../styles";
import { BsPencilSquare } from "react-icons/bs";

import Channels from "./Channels";
import DMs from "./DMs";

export default function Sidebar() {
    return (
        <SidebarStyles>
            <GroupName>
                <h1>Avion School</h1>
                <BsPencilSquare />
            </GroupName>
            <div>
                <Channels />
                <DMs />
            </div>
        </SidebarStyles>
    )
}