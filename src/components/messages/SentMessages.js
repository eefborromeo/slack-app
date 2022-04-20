import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/User';
import { MessagesStyles, MessageLayout } from '../styles';
import Message from './Message';

export default function SentMessages({ selectedUser, sentMessage, selectedChannel }) {
	const [messagesData, setMessagesData] = useState([]);
	const {
		user: { expiry, uid, accessToken, client },
	} = useContext(UserContext);
	const params = {
		expiry: expiry,
		uid: uid,
		'access-token': accessToken,
		client: client,
	};

	const getDirectMessages = async () => {
		let {
			data: { data },
		} = await axios.get(
			`http://206.189.91.54/api/v1/messages?receiver_id=${selectedUser?.id}&receiver_class=User`,
			{ params }
		);
		setMessagesData(data);
	};

	const getChannelMessages = async () => {
		let {
			data: { data },
		} = await axios.get(
			`http://206.189.91.54/api/v1/messages?receiver_id=${selectedChannel?.id}&receiver_class=Channel`,
			{ params }
		);
		setMessagesData(data);
	};

	const options = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	};

	const messages = messagesData?.reduce((filteredMessages, message) => {
		const date = message => new Date(message).toLocaleDateString('en-US', options);
		if (!filteredMessages[date(message?.created_at)]) {
			filteredMessages[date(message?.created_at)] = [message];
		} else {
			filteredMessages[date(message?.created_at)].push(message);
		}
		return filteredMessages;
	}, {});

	let newMessages;
	if (messages !== undefined || null) {
		newMessages = Object.keys(messages).map(date => {
			return {
				date,
				messages: messages[date],
			};
		});
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (selectedUser) {
				getDirectMessages();
			} else {
				getChannelMessages();
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [selectedUser, selectedChannel, sentMessage]);

	return (
		<MessagesStyles>
			<MessageLayout>
				<h3>This is the start of your messages</h3>
			</MessageLayout>
			{newMessages?.length > 0 &&
				newMessages.map(message => <Message key={message.date} message={message} />)}
		</MessagesStyles>
	);
}
