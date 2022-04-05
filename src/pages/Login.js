import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, FormLayout } from '../components/styles';

export default function Login() {
    return (
        <FormLayout>
            <FormContainer>
                <h1>Sign In to Workspace</h1>
                <p>Enter your <span>email</span> and <span>password</span></p>
                <form>
                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            aria-label="Email" 
                            placeholder="Email" />
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