import React, {useState} from "react"
import {Redirect} from 'react-router'
// import app from '../util/base'
import {AuthContext} from "../util/Auth"
import HeaderIntro from './headerIntro'
import {loginUser} from '../store/actions/index'

import {useDispatch, useSelector} from 'react-redux'
import firebaseUser from '../store/actions/auth'

// Material UI Imports
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#ffbf55',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ffbf55',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ffbf55',
        },
        '&:hover fieldset': {
          borderColor: '#ffbf55',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffbf55',
        },
      },
    },
  })(TextField);





const Login = ({history}) => {
    const classes = useStyles();
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const handleLogin = event => {
        event.preventDefault();
        dispatch(loginUser(info.email, info.password))

    }

    const handleChange = event => {
        setInfo({...info, [event.target.name] : event.target.value})
        console.log(info)
    }


    const handleSignUp = () => {
        history.push('/signup')
    }

    if (state.isAuthenticated) {
        return <Redirect to="/home" />;
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
                        <CssTextField onChange={handleChange} label="Email" name="email"/>
                        <CssTextField onChange={handleChange} type="password" label="Password" name="password" />
                        <button onSubmit = {handleLogin} className={classes.loginButton}>Login</button>
                    </form>
                    <button className={classes.googleLogin}>Login With Google</button>
                    <p>Don't have an account yet? <span style={{fontWeight: "bold", cursor: 'pointer'}} onClick={handleSignUp}>Register Here</span></p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default Login