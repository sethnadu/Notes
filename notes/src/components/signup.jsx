import React, {useCallback} from "react"
import { withRouter } from "react-router"
import app from "../base";
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

    const SignUp = ({history}) => {
        const classes = useStyles();

        const handleSignUp = useCallback(async e => {
            e.preventDefault();
            const {email, password} = e.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                history.push('/home')
            } catch (error) {
                console.log("Error: ", error)
            }
        }, [history])

        const handleLogin = () => {
            history.push('/login')
        }
    return (
        <>
        <HeaderIntro />
        <div style={{display: 'flex', justifyContent: "center"}}>
            <Card className={classes.rootCard}>
                <CardContent>
                    <Typography className={classes.title}>
                    Register
                    </Typography>
                    <form onSubmit={handleSignUp} className={classes.formRoot} noValidate autoComplete="off">
                        <TextField label="Email" name="email"/>
                        <TextField label="Password" name="password"/>
                        <button onSubmit={handleSignUp} className={classes.loginButton}>Sign Up</button>
                    </form>
                    <button className={classes.googleLogin}>Sign Up With Google</button>
                    <p>Have an account? <span style={{fontWeight: "bold", cursor: 'pointer'}} onClick={handleLogin}>Login</span></p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default SignUp