import React from "react"

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

const Login = () => {
    const classes = useStyles();

    return (
        <div style={{display: 'flex', justifyContent: "center"}}>
            <Card className={classes.rootCard}>
                <CardContent>
                    <Typography className={classes.title}>
                    Login
                    </Typography>
                    <form className={classes.formRoot} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Email"/>
                        <TextField id="standard-basic" label="Password" />
                        <button className={classes.loginButton}>Login</button>
                    </form>
                    <button className={classes.googleLogin}>Login With Google</button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login