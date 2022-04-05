import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, FormLayout } from '../components/styles';

export default function Login() {
    return (
        <FormLayout>
            <FormContainer>
                <h1>Sign In to Workspace</h1>
                <p>Enter your <span>username</span> and <span>password</span></p>
                <form>
                    <div>
                        <input 
                            type="text" 
                            id="username" 
                            aria-label="Username" 
                            placeholder="Username" />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            id="password" 
                            aria-label="Password" 
                            placeholder="Password" />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                <Link to="/signup">Create an account</Link>
            </FormContainer>
        </FormLayout>
    )
}