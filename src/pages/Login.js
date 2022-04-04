import React from 'react';
import { FormLayout } from '../components/styles';

export default function Login() {
    return (
        <FormLayout>
            <div>
                <h3>Login</h3>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </FormLayout>
    )
}