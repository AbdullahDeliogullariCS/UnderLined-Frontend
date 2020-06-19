import React, {useState} from 'react';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
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

import Copyright from "../Copyright/Copyright";
import {signUpPostUserCredentials, signInPostVerifyCredentials} from "../../../connection/UserConnections";

import classes from './SignUpStyles.css';

import signUpIcon from '../../../utils/images/signup-icon.png';

const DialogTransition = props => <Slide direction="up" {...props} />;

const signUp = (props) => {

    const [userInformation, setUserInformation] = useState({
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        confirm: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const signUpInformation = {
        name: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        role: 'reader',
        photo: '',
        favorites: [],
        resources: []
    };

    const handleChange = (prop) => (event) => {
        setUserInformation({ ...userInformation, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setUserInformation({ ...userInformation, showPassword: !userInformation.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setUserInformation({ ...userInformation, showConfirmPassword: !userInformation.showConfirmPassword });
    };

    const handleClickSignUpButton = () => {
        signUpInformation.name = userInformation.name;
        signUpInformation.surname = userInformation.surname;
        signUpInformation.username = userInformation.username;
        signUpInformation.email = userInformation.email;
        signUpInformation.password = userInformation.password;

        signUpPostUserCredentials(signUpInformation);
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
                            container
                            spacing={2}
                        >
                            <Grid
                                className={classes.iconContainer}
                                container
                            >
                                <img
                                    className={classes.icon}
                                    src={signUpIcon}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth={true}
                                    autoFocus={true}
                                    autoComplete="name"
                                    name="name"
                                    variant="outlined"
                                    id="name"
                                    label="Name"
                                    onChange={handleChange('name')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth={true}
                                    autoComplete="name"
                                    name="surname"
                                    variant="outlined"
                                    id="surname"
                                    label="Surname"
                                    onChange={handleChange('surname')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth={true}
                                    autoComplete="username"
                                    name="username"
                                    variant="outlined"
                                    id="username"
                                    label="Username"
                                    onChange={handleChange('username')}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth={true}
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
                                <FormControl
                                    fullWidth={true}
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        Confirm Password
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        autoComplete="password"
                                        name="confirm"
                                        variant="outlined"
                                        id="confirm"
                                        label="Confirm Password"
                                        type={userInformation.showConfirmPassword ? 'text' : 'password'}
                                        onChange={handleChange('confirm')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {userInformation.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth={true}
                                    size="medium"
                                    type="button"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleClickSignUpButton}
                                >
                                    <Typography variant="body1">
                                        SIGN UP
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Link variant="body2" onClick={props.handleMoveToSignInDialog}>
                                    <Typography align="center">
                                        Already have an account? Sign in
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

export default signUp;
