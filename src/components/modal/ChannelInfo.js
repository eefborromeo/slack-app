import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/User";

export default function ChannelInfo({ selectedChannel, getAllUsers, allUsers }) {
    const [channelInfo, setChannelInfo] = useState({})
    const [channelMembers, setChannelMembers] = useState([]);
    const { id } = selectedChannel;
    const { user: { expiry, uid, accessToken, client } } = useContext(UserContext);
    const params = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }


    const getChannelInfo = async () => {
        const {data: { data }} = await axios.get(`http://206.189.91.54/api/v1/channels/${id}`, { params })
        setChannelInfo(data)
        getAllUsers();
    }

    const getMembersById = () => {
        const {channel_members} = channelInfo;
        const groupedMembers = allUsers?.filter(user => channel_members?.find(member => member.user_id === user.id))
        setChannelMembers(groupedMembers)
    }

    const ownerInfo = allUsers?.find(user => channelInfo?.owner_id === user.id);

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const date = new Date(channelInfo?.created_at).toLocaleDateString('en-US', options);
    
    useEffect(() => {
        getChannelInfo();
    }, [])

    useEffect(() => {
        getMembersById();
    }, [allUsers])
    
    return (
        <div>
            <h3>{channelInfo.name}</h3>
            <ul>
                <li>About</li>
                <li>Members</li>
            </ul>
            <div>
                <h3>About This Channel</h3>
                <p>Owner: <span>{ownerInfo?.uid}</span></p>
                <p>Date Created: <span>{date}</span></p>

            </div>
            <div>
                <h3>Channel Members</h3>
                <ul>
                    {
                         channelMembers.length === 0 ?
                         <div>Loading ...</div> :
                         channelMembers.map(member => <li key={member.id}>{member.uid}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}