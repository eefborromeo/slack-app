import React, { useState } from "react";
import { Errors, FormContainer, FormLayout } from "../components/styles";

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        password_confirmation: "",
    })
    const [errors, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password, password_confirmation} = userInfo;
        
        if (!email && !password && !password_confirmation) {
            setErrors(true);
            setErrorMessage('Fields cannot be empty')
        }
        if (password !== password_confirmation) {
            setErrors(true);
            setErrorMessage('Passwords do not match')
        }
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
                            { errors &&  <Errors>{errorMessage}</Errors>}
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </FormContainer>
        </FormLayout>
    )
}