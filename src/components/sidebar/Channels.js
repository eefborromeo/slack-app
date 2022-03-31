import React from "react";
import { ChannelDMsLayout } from "../styles";
import { BsPlus, BsHash } from "react-icons/bs";

export default function Channels() {
    return (
        <ChannelDMsLayout>
            <h2>Channels</h2>
            <ul>
                <li><BsHash /> batch17</li>
                <li><BsPlus /> Add channels</li>
            </ul>
        </ChannelDMsLayout>
    )
}