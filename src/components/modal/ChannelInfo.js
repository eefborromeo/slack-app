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
        if (allUsers.length !== 0) {
            const groupedMembers = allUsers.filter(user => channel_members.find(member => member.user_id === user.id))
            setChannelMembers(groupedMembers)
        }
         
    }

    
    useEffect(() => {
        getChannelInfo();
    }, [])

    useEffect(() => {
        getMembersById();
    }, [allUsers])
    
    return (
        <div>
            <h3>{channelInfo.name}</h3>
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