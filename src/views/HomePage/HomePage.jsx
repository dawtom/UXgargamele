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

class HomePage extends React.Component {

    render() {
        const {classes, ...rest} = this.props;
        const allMessages = <Button href='/messages' style={{paddingLeft: "1rem", paddingRight: "1rem"}}>Wszystkie 3 komunikaty</Button>;
        const closeTheDoor = <Button color='primary' style={{paddingLeft: "1rem", paddingRight: "1rem"}} >Zamknij je</Button>;
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
                    <div className={classes.container} style={{paddingBottom: "10px"}}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                                <Alert message="Drzwi frontowe otwarte" level="warning" button1={allMessages} button2={closeTheDoor} classes={classes}/>
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
