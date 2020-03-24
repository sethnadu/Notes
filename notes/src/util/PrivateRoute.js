import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";

import Main from '../components/main'

const PrivateRoute = ({component: Component, isAuthenticated, isVerifying,...rest}) => {
    return (
        <Route
            {...rest}
            render={props => 
                isVerifying ? (
                <div /> 
                ) : isAuthenticated ? (
                    <Main {...props} />
                ) : (
                    <Redirect to={{pathname: "/login", state: {from: props.location}}} />
                )}
            />
    )
}

export default PrivateRoute;

