import { createMuiTheme } from '@material-ui/core/styles'


const austinBlue = '#17009E'
const austinBlue2 = "#6650EB"
const austinOrange = "#EB7421"
const austinLiteGreen = "#41EB38"
const austinDarkGreen = "#339E2E"
const austinText = "black"


export default createMuiTheme({
    palette: {
        common: {
            blue: `${austinBlue}`,
            orange: `${austinOrange}`,
        },
        primary: {
            main: `${austinBlue}`
        },
        secondary: {
            main: `${austinBlue2}`
        },
        text: {
            main: `${austinText}`,
            pea: `${austinDarkGreen}`
        }
    },
    typography: {
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: austinText,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: austinLiteGreen
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: austinLiteGreen,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: austinLiteGreen
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
    }
})