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
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Favorite from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
                            <Grid item xs={3}> </Grid>
                            <Grid item xs={2}>
                                <img height={imgSize} width={imgSize} src={oven_img} />
                            </Grid>
                            <Grid item xs={6}>
                                <Grid item xs={3}>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                </Grid>
                                <Grid item xs={3}>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                    <span><Button justIcon round color="primary"><Favorite style={{color: "#FFFFFF"}}/></Button></span>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}> </Grid>
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



                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(OvenPage);
