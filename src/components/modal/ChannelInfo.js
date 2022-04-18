import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/User";
import { ChannelInformation, Tab, Tabs } from "../styles";

export default function ChannelInfo({ selectedChannel, getAllUsers, allUsers }) {
    const [channelInfo, setChannelInfo] = useState({})
    const [channelMembers, setChannelMembers] = useState([]);
    const [activeTab, setActiveTab] = useState("About");
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

    const handleChangeTab = (e) => {
        setActiveTab(e.target.textContent)
    }
    
    useEffect(() => {
        getChannelInfo();
    }, [])

    useEffect(() => {
        getMembersById();
    }, [allUsers])
    
    return (
        <ChannelInformation>
            <h3>{channelInfo.name}</h3>
            <Tabs>
                <li className={activeTab === "About" ? "active" : ""} onClick={(e) => handleChangeTab(e)}>About</li>
                <li className={activeTab === "Members" ? "active" : ""} onClick={(e) => handleChangeTab(e)}>Members</li>
            </Tabs>
            <Tab className={activeTab === "About" ? "active" : ""}>
                <h3>About This Channel</h3>
                <p>Owner: <span>{ownerInfo?.uid}</span></p>
                <p>Date Created: <span>{date}</span></p>

            </Tab>
            <Tab className={activeTab === "Members" ? "active" : ""}>
                <h3>Channel Members</h3>
                <ul>
                    {
                         channelMembers.length === 0 ?
                         <div>Loading ...</div> :
                         channelMembers.map(member => <li key={member.id}>{member.uid}</li>)
                    }
                </ul>
            </Tab>
        </ChannelInformation>
    )
}