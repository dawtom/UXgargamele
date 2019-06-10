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
import warning from 'assets/img/warning.svg'
import info from 'assets/img/info.svg'

const dashboardRoutes = [];

class Messages extends React.Component {

    render() {
        const {classes, ...rest} = this.props;

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
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={8}>
                                    <div className={classes.centeredContainer} style={{paddingTop: 10, paddingBottom: 10}}>
                                        <div id="alert1" className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={warning} alt="Ostrzeżenie" className={classes.image}/>
                                                <span>Drzwi frontowe otwarte</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='gray' onClick={() =>document.getElementById("alert1").style.display = "None"}>Odrzuć</Button>
                                                <Button color='secondary' onClick={() =>document.getElementById("alert1").style.display = "None"}>Zamknij je</Button>
                                            </div>
                                        </div>
                                        <div  id="alert2" className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={warning} alt="Ostrzeżenie" className={classes.image}/>
                                                <span>Woda w łazience jest odkręcona od 30 minut</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='gray' onClick={() =>document.getElementById("alert2").style.display = "None"}>Odrzuć</Button>
                                                <Button color='secondary' onClick={() =>document.getElementById("alert2").style.display = "None"}>Zakręć</Button>
                                            </div>
                                        </div>
                                        <div  id="alert3" className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={info} alt="Informacja" className={classes.image}/>
                                                <span>Pralka przestała pracować</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='secondary' onClick={() =>document.getElementById("alert3").style.display = "None"}>Ok</Button>
                                            </div>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(Messages);
