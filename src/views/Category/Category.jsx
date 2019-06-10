import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

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
                            <MediaControlCard deviceName="Ustaw" image={fridge} link="" />
                            <MediaControlCard deviceName="Ustaw" image={kettle} link=""/>
                            <MediaControlCard deviceName="Ustaw" image={oven_img} link="/oven"/>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(HomePage);
