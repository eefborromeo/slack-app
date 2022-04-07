import React, { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { TopBarLayout } from "../styles";

export default function TopBar() {
    const context = useContext(UserContext);

    const handleClick = () => {
        context.handleLogout();
    }
    return (
        <TopBarLayout>
            <button onClick={handleClick}>Logout</button>
        </TopBarLayout>
    )
}