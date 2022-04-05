import React from "react";
import { FormContainer, FormLayout } from "../components/styles";

export default function Signup() {
    return (
        <FormLayout>
            <FormContainer>
                <h1>Sign Up</h1>
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
                    <div>
                        <input 
                            type="password" 
                            id="password-confirm" 
                            aria-label="Password Confirmation" 
                            placeholder="Password Confirmation" />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </FormContainer>
        </FormLayout>
    )
}