import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import BlueOrange from '../Images/BlueOrange.jpg'
import sunFogForrest from '../Images/sunFogForrest.jpg'
import beachSunset from '../Images/beachSunset.jpg'

const useStyles = makeStyles(theme => ({
    landing: {
        paddingTop: "80px"
    },
    appBackground: {
        backgroundImage: `url(${sunFogForrest})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
    }
}))

const LandingPage = () => {

    const classes = useStyles()

    return (
        <>
            <img alt="sun forrest foggy" className={classes.appBackground} src={beachSunset}/>
            <Typography variant="h2" className={classes.landing}>
                This is the Landing Page!!
            </Typography>
        </>
        
    )
}

export default LandingPage
