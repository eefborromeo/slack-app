import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Errors, FormContainer, FormLayout } from "../components/styles";

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    })
    const [errors, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://206.189.91.54/api/v1/auth', userInfo) 
            .then(response => {
                navigate('/')
                return response       
            })
            .catch(error => {
                const { data: { status, errors } } = error.response;
                if (status === "error") {
                    setErrors(true)
                    setErrorMessage(errors.full_messages)
                    return
                }
            })
    }

    const handleChange = (e) => {
        setErrors(false)
        const key = e.target.id;
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [key]: value
        })
    }

    return (
        <FormLayout>
            <FormContainer>
                <h1>Sign Up</h1>
                <p>Create an account using your <span>email</span></p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            aria-label="Email"
                            aria-required="true"
                            placeholder="Email"
                            value={userInfo.email}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            id="password" 
                            aria-label="Password"
                            aria-required="true" 
                            placeholder="Password"
                            value={userInfo.password}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            id="password_confirmation" 
                            aria-label="Password Confirmation"
                            aria-required="true"
                            placeholder="Password Confirmation"
                            value={userInfo.password_confirmation}
                            onChange={handleChange} />
                            { errors &&  errorMessage.map((message, index) => <Errors key={index}>{message}</Errors>)}
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </FormContainer>
        </FormLayout>
    )
}