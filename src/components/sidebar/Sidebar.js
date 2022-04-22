import React from 'react';
import { SidebarStyles, GroupName } from '../styles';
import { BsPencilSquare } from 'react-icons/bs';

import Channels from './Channels';
import DMs from './DMs';

export default function Sidebar({
	setIsNewMessage,
	setIsModalShow,
	channels,
	setChannels,
	params,
}) {
	const handleNewMessage = () => {
		setIsNewMessage(prevState => !prevState);
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
					params={params}
					channels={channels}
					setChannels={setChannels}
				/>
				<DMs />
			</div>
		</SidebarStyles>
	);
}
