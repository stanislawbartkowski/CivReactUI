import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
// ---
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const StyledDrawer = withStyles({
    root: {
        pointerEvents: "none"
    },
    paper: {
        pointerEvents: "auto"
    }
})(props => <Drawer hideBackdrop {...props} />);

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600]
    }
});

function SimpleDialog(props: any) {
    const classes = useStyles();
    const { onClose, selectedValue, ...other } = props;

    function handleClose() {
        onClose(selectedValue);
    }

    function handleListItemClick(value: any) {
        onClose(value);
    }

    return (
        <StyledDrawer
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            {...other}
        >
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <List>
                {emails.map(email => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(email)}
                        key={email}
                    >
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
                <ListItem button onClick={() => handleListItemClick("addAccount")}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="add account" />
                </ListItem>
            </List>
        </StyledDrawer>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
    open: PropTypes.bool
};

function Test15() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    function handleClickOpen() {
        setOpen(true);
    }

    const handleClose = (value: any) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
      </Button>
            <Button variant="outlined" color="primary" onClick={() => window.alert("aaa")} >
                Open next dialog
      </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}

export default Test15;