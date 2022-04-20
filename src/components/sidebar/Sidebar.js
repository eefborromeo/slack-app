import React from 'react';
import { SidebarStyles, GroupName } from '../styles';
import { BsPencilSquare } from 'react-icons/bs';

import Channels from './Channels';
import DMs from './DMs';

export default function Sidebar({
	setIsNewMessage,
	getAllUsers,
	setIsModalShow,
	channels,
	setChannels,
	params,
}) {
	const handleUserFetch = () => {
		getAllUsers();
	};

	const handleNewMessage = () => {
		setIsNewMessage(prevState => !prevState);
		handleUserFetch();
	};

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
	);
}
