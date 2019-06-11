import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import MediaControlCard from "components/Card/MediaControlCard.jsx"
import fridge from "../../assets/img/fridge.png";
import kettle from "../../assets/img/kettle.png";
import oven_img from "../../assets/img/oven.png"

const dashboardRoutes = [];

class HomePage extends React.Component {

    render() {
        const {classes, ...rest} = this.props;

        return (
            <div>
                <Header
                    color="primary"
                    routes={dashboardRoutes}
                    brand="Gastronomia"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    backAvailable={true}
                    {...rest}
                />
                <div style={{padding: "2vh"}} className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container} style={{paddingLeft: 0, paddingRight: 0}}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                            <MediaControlCard deviceName="Ustaw" image={fridge} link="" />
                            <MediaControlCard deviceName="Ustaw" image={kettle} link=""/>
                            <MediaControlCard deviceName="Ustaw" image={oven_img} link="/oven"/>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(HomePage);
