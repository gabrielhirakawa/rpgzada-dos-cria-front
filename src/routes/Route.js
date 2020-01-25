import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';


export default function RouterWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}) {

    const isAuth = () => {
        if (localStorage.getItem('token') == null) {
            localStorage.clear();
            return false;
        }

        else{
            const token = localStorage.getItem('token');
            
            const decoded = jwt.decode(token);
            localStorage.setItem("user", decoded.name);
            return true;
        }

    }

    

    const signed = isAuth();
    console.log(signed);
    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }

    if (signed && !isPrivate) {
        return <Redirect to="/home" />
    }

    return <Route {...rest} component={Component} />
}
