import React from "react";
import { BsPlus, BsHash } from "react-icons/bs"
import { ChannelDMsLayout, Plus } from "../styles";

export default function Channels({setIsModalShow, handleUserFetch}) {
    const handleNewChannel = () => {
        setIsModalShow(true)
        handleUserFetch()
    }
    return (
        <ChannelDMsLayout>
            <h2>Channels</h2>
            <ul>
                <li><BsHash /> batch17</li>
                <Plus onClick={handleNewChannel}><BsPlus className="plus" /> Add channels</Plus>
            </ul>
        </ChannelDMsLayout>
    )
}