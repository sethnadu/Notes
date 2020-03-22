import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "./Auth"
import Main from './components/main'

const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={props => 
                !!currentUser ? (
                    <Main {...props} />
                ) : (
                    <Redirect to={"/login"} />
                )}
            />
    )
}

export default PrivateRoute;

