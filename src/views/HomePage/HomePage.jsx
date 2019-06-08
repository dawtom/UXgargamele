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

const dashboardRoutes = [];

class HomePage extends React.Component {

    render() {
        const {classes, ...rest} = this.props;
        return (
            <div>
                <Header
                    color="primary"
                    routes={dashboardRoutes}
                    brand="Smart Home"
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
                                            <div className={classes.centeredInRow}>
                                                <Button color='danger' simple href='/messages'>Wszystkie 3 komunikaty</Button>
                                                <Button color='secondary'>Zamknij</Button>
                                            </div>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <div className={classes.centeredContainer}>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Button size='lg' color='primary' className={classes.button}>Alarmy i
                                            zabezpieczenia</Button>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Button size='lg' color='primary' className={classes.button}>Temperatura i
                                            światło</Button>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Button size='lg' color='primary' href="/kitchen"
                                                className={classes.button}>Gastronomia</Button>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <Button size='lg' color='primary' className={classes.button}>Higiena</Button>
                                    </GridItem>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(HomePage);
