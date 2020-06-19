import React, {useState} from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Slide from "@material-ui/core/Slide";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Copyright from "../Copyright/Copyright";
import {signInPostVerifyCredentials} from "../../../connection/UserConnections";

import classes from './SignInStyles.css';

import signInIcon from '../../../utils/images/signin-icon.png';

const DialogTransition = props => <Slide direction="up" {...props} />;

const signIn = (props) => {

    const [userInformation, setUserInformation] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const signInInformation = {
        email: '',
        password: ''
    };

    const handleChange = (prop) => (event) => {
        setUserInformation({ ...userInformation, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setUserInformation({ ...userInformation, showPassword: !userInformation.showPassword });
    };

    const handleClickSignUpButton = () => {
        signInInformation.email = userInformation.email;
        signInInformation.password = userInformation.password;
        console.log(signInInformation);
        signInPostVerifyCredentials(signInInformation);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Dialog open={props.isOpen} onClose={props.handleClose} TransitionComponent={DialogTransition}>
            <Container
                maxWidth="xs"
            >
                <Paper
                    className={classes.paper}
                    elevation={0}
                >
                    <form
                        className={classes.form}
                        noValidate={true}
                    >
                        <Grid
                            className={classes.itemContainer}
                            container
                            spacing={2}
                        >
                            <Grid
                                className={classes.iconContainer}
                                container
                            >
                                <img
                                    className={classes.icon}
                                    src={signInIcon}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth={true}
                                    autoFocus={true}
                                    autoComplete="email"
                                    name="email"
                                    variant="outlined"
                                    id="email"
                                    label="Email"
                                    onChange={handleChange('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl
                                    fullWidth={true}
                                    variant="outlined"
                                >
                                    <InputLabel>
                                        Password
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        autoComplete="password"
                                        name="password"
                                        variant="outlined"
                                        id="password"
                                        label="Password"
                                        type={userInformation.showPassword ? 'text' : 'password'}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {userInformation.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth={true}
                                    size="medium"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleClickSignUpButton}
                                >
                                    <Typography variant="body1">
                                        SIGN IN
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Link variant="body2">
                                    <Typography align="center">
                                        Forgot password?
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Link variant="body2" onClick={props.handleMoveToSignUpDialog}>
                                    <Typography align="center">
                                        No account? Sign up
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Dialog>
    );
}

export default signIn;
