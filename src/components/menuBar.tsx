import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, makeStyles, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1
    },
    text: {
        fontSize: 20
    },
    menuIcon:{
        color: "white",
        marginLeft: "1700px",
        
    }   
}));


export default function MenuBar() {
const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event: any) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
    return(
        <div className={classes.root}>   
        <AppBar position="static">
            <Toolbar variant="dense">
            <Typography className={classes.text}>Dished
            </Typography>
            <IconButton className={classes.menuIcon} size='medium' onClick={handleClick}>
                    <MenuIcon/>
            </IconButton> 
               <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
        <MenuItem key='weekly-menu-form' component={Link} to='/weeklyMenu' onClick={handleClose}>Weekly menu</MenuItem>
        <MenuItem key='account-form' component={Link} to='/account' onClick={handleClose}>Account</MenuItem>
        <MenuItem key='logout-form' component={Link} to='/logout' onClick={handleClose}>Logout</MenuItem>
                </Menu>                 
            </Toolbar>
         </AppBar>
        </div>
    )       
}
