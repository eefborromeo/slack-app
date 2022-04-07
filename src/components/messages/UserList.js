import React, { useContext, useEffect, useState } from "react";
import { ReceiverContext } from "../../contexts/Receiver";
import { Dropdown, Options, UserListForm } from "../styles";

export default function UserList({ allUsers, setTitle, setIsNewMessage }) {
    const [search, setSearch] = useState('');
    const [searchList, setSearchList] = useState(allUsers);
    const [searchDisplay, setSearchDisplay] = useState(false);
    const receiver = useContext(ReceiverContext);
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchList.length === 0 ? setSearchDisplay(false) : setSearchDisplay(true);
    }
    
    const formSubmit = (id, email) => {
        receiver.handleSetReceiver(id)
        setTitle(email)
        setIsNewMessage(false);
    }

    const handleClick = ({id, email}) => {
        formSubmit(id, email)
    }


    useEffect(() => {
        if (search === "") {
            setSearchList(allUsers);
        } else {
            setSearchList(
                allUsers.filter((user) => user.uid.toLowerCase().match(search.toLowerCase()))
            )
        }
    }, [search, allUsers])
    return (
        <UserListForm>
            <Dropdown>
                <label>To:</label>
                <input 
                    type="text" 
                    value={search}
                    onChange={handleSearch}
                    autoComplete="off"
                />
                {   searchDisplay && 
                    <Options>
                        {!searchList ? <div>Loading</div> : searchList.map(user => <div key={user.id} onClick={() => handleClick(user)}>{user.uid}</div>)}
                    </Options>
                }
            </Dropdown>
        </UserListForm>
    )
}