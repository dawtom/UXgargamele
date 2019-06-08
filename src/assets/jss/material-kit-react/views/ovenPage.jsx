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
    labels: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 0',
        justifyContent: 'center',
        "& label": {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '30px',
            marginBottom: '20px'
        }
    },
    buttons: {
        "& button:first-of-type": {
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    switchChecked: {
        color: '#FFC61B !important',
        "& + $switchBar": {
            backgroundColor: "#FFC61B !important"
        },
    },
    switchIconChecked: {
        borderColor: "#FFC61B",
        transform: "translateX(0px)!important"
    },
    centeredContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        height: '60%',
        marginRight: '20px'
    },
    communicate: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        height: '150px',
        margin: '1rem 0',
        padding: '1rem',
        borderRadius: '1rem',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between'
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
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    button: {
        width: '100%',
        height: '150px',
        borderRadius: '1rem',
    }
};

export default landingPageStyle;
