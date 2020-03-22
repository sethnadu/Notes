import React, {useCallback, useContext} from "react"
import {withRouter, Redirect} from 'react-router'
import app from '../base'
import {AuthContext} from "../Auth"
import HeaderIntro from './headerIntro'

// Material UI Imports
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    formRoot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '250px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
    },
    rootCard: {
        minWidth: 275,
        maxWidth: 600,
        padding: "20px 10px",
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        margin: '20vh 20px',
        // backgroundColor: "#f0ead6",
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    loginButton: {
        width: "250px",
        fontSize: 16,
        borderRadius: "5px",
        height: "35px",
        margin: "20px auto",
        border: 'none',
        backgroundColor: "#ffbf55",
    },
    googleLogin: {
        width: "250px",
        fontSize: 16,
        borderRadius: "5px",
        height: "35px",
        margin: "20px auto",
        border: 'none',
        backgroundColor: "#d82c32",
        color: 'white'
    }
}));

const Login = ({history}) => {
    const classes = useStyles();

    const handleLogin = useCallback( async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }, [history])

    const {currentUser} = useContext(AuthContext)

    if(currentUser) {
        return <Redirect to="/home"/>
    };

    const handleSignUp = () => {
        history.push('/signup')
    }

    return (
        <>
        <HeaderIntro />
        <div style={{display: 'flex', justifyContent: "center"}}>
            <Card className={classes.rootCard}>
                <CardContent>
                    <Typography className={classes.title}>
                    Login
                    </Typography>
                    <form onSubmit = {handleLogin} className={classes.formRoot} noValidate autoComplete="off">
                        <TextField label="Email" name="email"/>
                        <TextField label="Password" name="password" />
                        <button onSubmit = {handleLogin} className={classes.loginButton}>Login</button>
                    </form>
                    <button  className={classes.googleLogin}>Login With Google</button>
                    <p>Don't have an account yet? <span style={{fontWeight: "bold", cursor: 'pointer'}} onClick={handleSignUp}>Register Here</span></p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default Login