import {container, title} from "assets/jss/material-kit-react.jsx";
import navbarsStyle from '../views/componentsSections/navbarsStyle'

const landingPageStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        flexWrap: 'wrap',
        "& span": {
            justifyContent: 'left'
        },
        ...container,
    },
    centeredContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    centeredInRow: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        "& a": {
            whiteSpace: 'pre-wrap !important'
        },
    },
    centeredInColumns: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        "& a": {
            whiteSpace: 'pre-wrap !important'
        },
    },
    image: {
        height: '60%',
        marginRight: '20px'
    },
    communicate: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        margin: '1rem 0',
        padding: '1rem',
        borderRadius: '0.5rem',
        color: 'black',
        display: 'flex',
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#0D2378",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    ...navbarsStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        marginTop: "100px !important"
    },
    mainRaised: {
        margin: "-60px 15px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    button: {
        width: '100%',
        height: '12vh',
        borderRadius: '1rem',
    }
};

export default landingPageStyle;
