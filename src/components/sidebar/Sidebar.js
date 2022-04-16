import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/User";
import { SidebarStyles, GroupName } from "../styles";
import { BsPencilSquare } from "react-icons/bs";

import Channels from "./Channels";
import DMs from "./DMs";

export default function Sidebar({ setIsNewMessage, setAllUsers, setIsModalShow, channels, setChannels }) {
    const { user: { expiry, uid, accessToken, client } } = useContext(UserContext);
    const params = {
        "expiry": expiry,
        "uid": uid,
        "access-token": accessToken,
        "client": client,
    }
 
    const getAllUsers = async () => {
        let {data: {data}} = await axios.get("http://206.189.91.54/api/v1/users", { params })
        setAllUsers(data)
    }

    const handleUserFetch = () => {
        getAllUsers()
    }
    
    const handleNewMessage = () => {
        setIsNewMessage(prevState => !prevState);
        handleUserFetch();
    }

    return (
        <SidebarStyles>
            <GroupName>
                <h1>Avion School</h1>
                <BsPencilSquare onClick={handleNewMessage} />
            </GroupName>
            <div>
                <Channels 
                    setIsModalShow={setIsModalShow} 
                    handleUserFetch={handleUserFetch} 
                    params={params}
                    channels={channels}
                    setChannels={setChannels}
                />
                <DMs />
            </div>
        </SidebarStyles>
    )
}