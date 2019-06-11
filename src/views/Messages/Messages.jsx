import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from '../../components/CustomButtons/Button'
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import Alert from 'components/Card/Alert.jsx'

const dashboardRoutes = [];

class Messages extends React.Component {

    render() {
        const {classes, ...rest} = this.props;

        const discard1 = <Button onClick={() =>document.getElementById("alert1").style.display = "None"}>Odrzuć</Button>;
        const closeTheDoor = <Button color='primary' onClick={() =>document.getElementById("alert1").style.display = "None"}>Zamknij je</Button>;

        const discard2 = <Button onClick={() =>document.getElementById("alert2").style.display = "None"}>Odrzuć</Button>;
        const turnOff = <Button color='primary' onClick={() =>document.getElementById("alert2").style.display = "None"}>Zakręć</Button>;

        const acceptLaundry = <Button color='primary' onClick={() =>document.getElementById("alert3").style.display = "None"}>Ok</Button>;

        return (
            <div>
                <Header
                    color="primary"
                    routes={dashboardRoutes}
                    brand="Komunikaty"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    backAvailable={true}
                    {...rest}
                />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container} style={{paddingLeft: 0, paddingRight: 0}}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <div id="alert1">
                                    <Alert message="Drzwi frontowe otwarte" level="warning" button1={discard1} button2={closeTheDoor} classes={classes}/>
                                </div>
                                <div id="alert2">
                                    <Alert message="Woda w łazience jest odkręcona od 30 minut" level="warning" button1={discard2} button2={turnOff} classes={classes}/>
                                </div>
                                <div id="alert3">
                                    <Alert message="Pralka przestała pracować" level="info" button2={acceptLaundry} classes={classes}/>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(Messages);
