import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from "@material-ui/core/Dialog";

import ResourceItem from "../ResourceItem/ResourceItem";

const dummyResource = [{'subtitle': "Abdullah", 'text': "Deliogullari"},{'subtitle': "Mehmet", 'text': "Deliogullarindan"}];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const ResourceList = (props) => {
    const classes = useStyles();

    return (
        <Dialog maxWidth={'md'} open={props.isOpen}>
            {dummyResource.map(resource => <ResourceItem header={resource.subtitle} body={resource.text}/>)}
        </Dialog>
    );
}

export default ResourceList;
