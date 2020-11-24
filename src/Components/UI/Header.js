import React , { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'



const ElevationScroll = (props) => {
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })
    return React.cloneElement(children, {
        elevation: trigger ? 10 : 0,
    })
}

const useStyles = makeStyles(theme => ({
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        margin: "10px"
    },
    menuButtonContainer: {
        marginLeft: "auto",
    },
    threeLiner: {
        width: "50px",
        height: "50px",
        color: theme.palette.common.orange,
    },
    headerTitle: {
        color: "white",
        
    },
    menuOption: {
        backgroundColor: theme.palette.common.orange.dark,
        color: "white",
        "&:hover": {
            opacity: 1,
            color: theme.palette.common.orange
        },
        margin: "10px",
        minWidth: "50px"
    },
    menuOptionContainer: {
        marginLeft: "auto"
    },
    appBar: {
        padding: "18px",
        marginBottom: "20px"
    }
}))




export default function Header (props) {

    const classes = useStyles()
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("sm"))
   
    const threeLinedMenuButton = <IconButton edge="start" className={classes.menuButtonContainer}  aria-label="menu"><MenuIcon className={classes.threeLiner} /></IconButton>
    const navButtons = <div className={classes.menuOptionContainer}>
                        <Button className={classes.menuOption}>About</Button>
                        <Button className={classes.menuOption}>Resume</Button>
                        <Button className={classes.menuOption}>Projects</Button>
                     </div>

    return(
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" className={classes.headerTitle}>
                        Austin Evans Software Engineer 
                    </Typography>
                    
                    {matches ? threeLinedMenuButton : navButtons}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}