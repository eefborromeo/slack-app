import React from "react";
import { BsPlus, BsHash } from "react-icons/bs"
import { ChannelDMsLayout, Plus } from "../styles";

export default function Channels() {
    return (
        <ChannelDMsLayout>
            <h2>Channels</h2>
            <ul>
                <li><BsHash /> batch17</li>
                <Plus><BsPlus className="plus" /> Add channels</Plus>
            </ul>
        </ChannelDMsLayout>
    )
}