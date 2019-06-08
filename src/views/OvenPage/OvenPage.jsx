import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Button from 'components/CustomButtons/Button.jsx';
import oven_img from "../../assets/img/oven.png"

import Favorite from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem.jsx";



const dashboardRoutes = [];

class OvenPage extends React.Component {

    render() {
        const {classes, ...rest} = this.props;
        const imgSize = "150em";
        return (
            <div>
                <Header
                    color="primary"
                    routes={dashboardRoutes}
                    brand="UXgargamelee"
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
                            <GridItem item xs={6} sm={6} md={6}>
                                <img height={imgSize} width={imgSize} src={oven_img} />
                            </GridItem>
                            <GridItem item xs={6} sm={6} md={6}>
                                <GridItem item xs={12} sm={12} md={12}>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                </GridItem>
                                <GridItem item xs={12}  sm={12} md={12}>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                </GridItem>
                                <GridItem item xs={12} sm={12} md={12}>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                    <Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button>
                                </GridItem>
                            </GridItem>
                            {/*
                            <div className={"main"}>

                                <span>
                                    <div>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    </div>
                                    <div>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    </div>
                                    <div>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                        <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    </div>
                                </span>
                            </div>*/}


                            {/*GIT CONFLICT BORDER! DO NOT CROSS*/}

                        </GridContainer>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(OvenPage);
