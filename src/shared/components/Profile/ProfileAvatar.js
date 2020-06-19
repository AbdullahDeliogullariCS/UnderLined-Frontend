import React, {useState} from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Profile from "./Profile";

export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [profileDialogOpen, setProfileDialogOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    };

    const handleProfileDialogOpen = ()  => {
        setProfileDialogOpen(true);
    };

    const handleProfileDialogClose = () => {
        setProfileDialogOpen(false);
    };

    const handleProfileMenuItemClick = () => {
        handleProfileDialogOpen();
        handleMenuClose();
    };

    return (
        <div>
        {auth && (
            <div>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={menuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleProfileMenuItemClick}>Favorites</MenuItem>
                    <MenuItem onClick={handleProfileMenuItemClick}>Profile</MenuItem>
                    <Profile isOpen={profileDialogOpen} handleClose={handleProfileDialogClose}/>
                    <MenuItem onClick={handleProfileMenuItemClick}>Logout</MenuItem>
                </Menu>
            </div>
        )}
        </div>
    )
}
