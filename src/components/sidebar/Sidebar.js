import React from "react";
import { SidebarStyles, GroupName } from "../styles";
import { BsPencilSquare, BsPlus, BsHash } from "react-icons/bs";
import ChannelDMs from "./ChannelDMs";

export default function Sidebar() {
    return (
        <SidebarStyles>
            <GroupName>
                <h1>Avion School</h1>
                <BsPencilSquare />
            </GroupName>
            <div>
                <ChannelDMs>
                    <h2>Channels</h2>
                    <ul>
                        <li><BsHash /> batch17</li>
                        <li><BsPlus /> Add channels</li>
                    </ul>
                </ChannelDMs>
                <ChannelDMs>
                    <h2>Direct Messages</h2>
                    <ul>
                        <li>Eloisa</li>
                        <li>Slackbot</li>
                    </ul>
                </ChannelDMs>
            </div>
        </SidebarStyles>
    )
}