import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { BsPlus, BsHash } from "react-icons/bs"
import { ChannelDMsLayout, Plus } from "../styles";

export default function Channels({setIsModalShow, handleUserFetch, params}) {
    const [channels, setChannels] = useState([]);

    const handleNewChannel = () => {
        setIsModalShow(true)
        handleUserFetch()
    }

    const getChannels = async () => {
        let {data: {data}} = await axios.get("http://206.189.91.54/api/v1/channels", { params })
        setChannels(data)
    }

    useEffect(() => {
        getChannels()
    }, [])

    
    return (
        <ChannelDMsLayout>
            <h2>Channels</h2>
            <ul>
                {channels.map(channel => {
                    return (
                        <Link key={channel.id} to={`/app/channels/${channel.id}`}>
                            <li><BsHash /> {channel.name}</li>
                        </Link>
                    )
                })}
                <Plus onClick={handleNewChannel}><BsPlus className="plus" /> Add channels</Plus>
            </ul>
        </ChannelDMsLayout>
    )
}