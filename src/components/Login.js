import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const users = [
    {
        user: 'admin',
        password: 'admin'
    },
    {
        user: 'demo',
        password: 'demo'
    },
]

export default function Login({onLogin, isLoggedIn}) {
    const classes = useStyles();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    function validateForm() {
        return user.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        users.forEach((u) => {
            if (u.user === user && u.password === password)
                onLogin()
        })
    }

    if (isLoggedIn) {
        return <Redirect to='/dashboard'/>
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="User"
                        name="user"
                        autoComplete="user"
                        autoFocus
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!validateForm()}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
}