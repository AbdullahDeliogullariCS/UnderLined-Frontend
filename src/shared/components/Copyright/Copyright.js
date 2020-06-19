import React from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import classes from './CopyrightStyles.css';

const Copyright = () => {
    return (
        <div className={classes.copyright}>
            <Typography
                variant="body2"
                color="textSecondary"
            >
                {'Copyright © '}
                <Link
                    href="/home"
                    color="inherit"
                >
                    UnderLined
                </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
};

export default Copyright;
