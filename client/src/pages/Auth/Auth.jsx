import React from 'react';
import { LoginForm } from 'modules';
import { SignupForm } from 'modules';
import { Route } from 'react-router-dom';
import './Auth.scss'

const Auth = () => {
    return (
        <div className="auth">
            <Route exact path={['/', '/login']} component={LoginForm} />
            <Route exact path="/register" component={SignupForm} />
        </div>
    );
};

export default Auth;