import React, { useEffect, useState } from "react"
import { isCompositeComponent } from "react-dom/test-utils";
import { Dropdown, NewChannelLayout, Options } from "../styles"

export default function NewChannel({ allUsers }) {
    const [filter, setFilter] = useState('');
    const [filterList, setFilterList] = useState(allUsers)
    const [channelInfo, setChannelInfo] = useState({
        "name": '',
        "user_ids": []
    })

    const handleFilter = (e) => {
        setFilter(e.target.value);
    }

    const handleCreateChannel = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (filter === '') {
            setFilterList(allUsers)
        } else {
            setFilterList(allUsers.filter(user => user.uid.includes(filter)))
        }
    }, [allUsers, filter])

    return (
        <NewChannelLayout>
            {filterList.length === 0 ? 
                <div>
                    Loading...
                </div> :
                <Dropdown>
                    <form onSubmit={(e) => handleCreateChannel(e)}>
                        <div>
                            <label>Channel Name:</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label>Members:</label>
                            <input type="text" value={filter} onChange={(e) => handleFilter(e)}/>
                        </div>
                        <Options className="members">
                            {filterList.map(user => <div key={user.uid} onClick={handleClick}>{user.uid}</div>)}
                        </Options>
                        <button type="submit">Create Channel</button>
                    </form>
                </Dropdown>}
        </NewChannelLayout>
    )
}