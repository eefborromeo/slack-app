import React, { useState } from "react";
import { Dropdown, Options, UserListForm } from "../styles";

export default function UserList() {
    const [searchDisplay, setSearchDisplay] = useState(false)

    return (
        <UserListForm>
            <Dropdown>
                <input type="text" />
                {   searchDisplay && 
                    <Options>
                        <div>User2</div>
                    </Options>
                }
            </Dropdown>
        </UserListForm>
    )
}