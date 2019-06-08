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
                    brand="UXgargamele"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                                <GridItem xs={12} sm={12} md={8}>
                                    <div className={classes.centeredContainer}>
                                        <div className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={warning} className={classes.image}/>
                                                <span>Drzwi frontowe otwarte</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='gray'>Odrzuć</Button>
                                                <Button color='secondary'>Zamknij</Button>
                                            </div>
                                        </div>
                                        <div className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={warning} className={classes.image}/>
                                                <span>Ciepła woda jest wykorzystywan w łazience od 30 minut</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='gray'>Odrzuć</Button>
                                                <Button color='secondary'>Zakręć</Button>
                                            </div>
                                        </div>
                                        <div className={classes.communicate}>
                                            <div className={classes.centeredContainer}>
                                                <img src={info} className={classes.image}/>
                                                <span>Pralka przestała działać</span>
                                            </div>
                                            <div className={classes.centeredInColumns}>
                                                <Button color='secondary'>Ok</Button>
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
