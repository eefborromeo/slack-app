import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { FormContainer, FormLayout, Errors } from '../components/styles';
import { UserContext } from '../contexts/User';

export default function Login() {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState(false);
	const [errorMessage, setErrorMessage] = useState([]);
	const { user, handleLogin } = useContext(UserContext);

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();

		axios
			.post('http://206.189.91.54/api/v1/auth/sign_in', userInfo)
			.then(response => {
				const {
					data: {
						data: { email, uid },
					},
					headers: { 'access-token': accessToken, client, expiry },
				} = response;
				handleLogin(uid, accessToken, client, email, expiry);
				navigate('/app');
			})
			.catch(error => {
				const {
					data: { errors },
				} = error.response;
				setErrors(true);
				setErrorMessage(errors);
				return;
			});
	};

	const handleChange = e => {
		setErrors(false);
		const key = e.target.id;
		const value = e.target.value;
		setUserInfo({
			...userInfo,
			[key]: value,
		});
	};

	if (user.isLoggedIn) {
		return <Navigate to="/app" />;
	}

	return (
		<FormLayout>
			<FormContainer>
				<h1>Sign In to Workspace</h1>
				<p>
					Enter your <span>email</span> and <span>password</span>
				</p>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							type="email"
							id="email"
							aria-label="Email"
							placeholder="Email"
							value={userInfo.email}
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type="password"
							id="password"
							aria-label="Password"
							placeholder="Password"
							value={userInfo.password}
							onChange={handleChange}
						/>
						{errors && errorMessage.map((message, index) => <Errors key={index}>{message}</Errors>)}
					</div>
					<button type="submit">Sign In</button>
				</form>
				<Link to="/signup">Create an account</Link>
			</FormContainer>
		</FormLayout>
	);
}
