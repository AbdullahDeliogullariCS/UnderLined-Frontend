import React, {useState} from 'react';

import EditText from 'react-editext';

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

import classes from './ProfileStyles.css';

import profileIcon from '../../../utils/images/profile-icon.png';

const DialogTransition = props => <Slide direction="up" {...props} />;

const Profile = (props) => {

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
        favorites: '',
        resources: ''
    };

    const onSave = val => {
        console.log('Edited Value -> ', val)
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
                            spacing={3}
                        >
                            <Grid
                                className={classes.iconContainer}
                                container
                            >
                                <img
                                    className={classes.icon}
                                    src={profileIcon}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    color={'primary'}
                                    align={"justify"}
                                    variant={"h5"}
                                    className={classes.text}>
                                    Name:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <EditText
                                    showButtonsOnHover={true}
                                    type={"text"}
                                    value='Abdullah'
                                    tabIndex={2}
                                    submitOnUnfocus={true}
                                    submitOnEnter={true}
                                    startEditingOnFocus={true}
                                    onSave={onSave}
                                    viewProps={{
                                        className: classes.text,
                                    }}

                                    inputProps={{
                                        style: {
                                            alignItems:"center",
                                            alignContent:"center",
                                            fontSize: 14,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    color={'primary'}
                                    variant={"h5"}
                                    className={classes.text}>
                                    Surname:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <EditText
                                    showButtonsOnHover={true}
                                    type={"text"}
                                    value='Abdullah'
                                    tabIndex={2}
                                    submitOnUnfocus={true}
                                    submitOnEnter={true}
                                    startEditingOnFocus={true}
                                    onSave={onSave}
                                    viewProps={{
                                        className: classes.text,
                                    }}

                                    inputProps={{
                                        style: {
                                            alignItems:"center",
                                            alignContent:"center",
                                            fontSize: 14,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    color={'primary'}
                                    variant={"h5"}
                                    className={classes.text}>
                                    Username:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <EditText
                                    showButtonsOnHover={true}
                                    type={"text"}
                                    value='Abdullah'
                                    tabIndex={2}
                                    submitOnUnfocus={true}
                                    submitOnEnter={true}
                                    startEditingOnFocus={true}
                                    onSave={onSave}
                                    viewProps={{
                                        className: classes.text,
                                    }}

                                    inputProps={{
                                        style: {
                                            alignItems:"center",
                                            alignContent:"center",
                                            fontSize: 14,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Typography
                                    color={'primary'}
                                    variant={"h5"}
                                    className={classes.text}>
                                    Email:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <EditText
                                    showButtonsOnHover={true}
                                    type={"text"}
                                    value='Abdullah'
                                    tabIndex={2}
                                    submitOnUnfocus={true}
                                    submitOnEnter={true}
                                    startEditingOnFocus={true}
                                    onSave={onSave}
                                    viewProps={{
                                        className: classes.email,
                                    }}

                                    inputProps={{
                                        style: {
                                            alignItems:"center",
                                            alignContent:"center",
                                            fontSize: 12,
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth={true}
                                    size="medium"
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleClickSignUpButton}
                                >
                                    <Typography variant="body1">
                                        UPDATE
                                    </Typography>
                                </Button>
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

export default Profile;
