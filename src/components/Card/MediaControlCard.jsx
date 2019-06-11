import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GridItem from "../Grid/GridItem";
import {Link} from "react-router-dom";

const styles = theme => ({
    card: {
        display: 'flex',
        margin: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: "15vh",
        height: "15vh",
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
});

function MediaControlCard(props) {
    const {deviceName, image, link, classes} = props;

    return (
        <Card style={{display: "flex"}} className={classes.card}>
            <GridItem xs={4} sm={4} md={3}>
                <Link to={link}>
                    <img src={image}
                         alt={deviceName}
                         style={{cursor: "pointer", width: "15vh", height: "15vh", margin: "5px"}}
                    />
                </Link>
            </GridItem>
            <GridItem xs={8} sm={8} md={4}>
                <CardContent style={{textAlign: "center", display: "grid", verticalAlign: "middle"}}
                             className={classes.content}>
                    <Link to={link}>
                        <Button variant="contained" color="primary" size="large" style={{
                            margin: "2vh",
                            color: "white",
                            textAlign: "center",
                            paddingLeft: 0,
                            paddingRight: 0
                        }} className={classes.button} fullWidth={true}>
                            <span style={{width: "100%"}}>{deviceName}</span>
                        </Button>
                    </Link>
                </CardContent>
            </GridItem>
        </Card>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MediaControlCard);
