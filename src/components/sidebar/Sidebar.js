import React, {useContext } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/User";
import { SidebarStyles, GroupName } from "../styles";
import { BsPencilSquare } from "react-icons/bs";

import Channels from "./Channels";
import DMs from "./DMs";

export default function Sidebar({ setIsNewMessage, setAllUsers }) {
    const { user } = useContext(UserContext);
    const params = {
        "expiry": user.expiry,
        "uid": user.uid,
        "access-token": user.accessToken,
        "client": user.client,
    }
 
    const getAllUsers = async () => {
        let {data: {data}} = await axios.get("http://206.189.91.54/api/v1/users", { params })
        setAllUsers(data)
    } 

    const handleNewMessage = () => {
        setIsNewMessage(true);
        getAllUsers();
    }

    return (
        <SidebarStyles>
            <GroupName>
                <h1>Avion School</h1>
                <BsPencilSquare onClick={handleNewMessage} />
            </GroupName>
            <div>
                <Channels />
                <DMs />
            </div>
        </SidebarStyles>
    )
}