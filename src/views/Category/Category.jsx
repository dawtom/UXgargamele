import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";

import MediaControlCard from "components/Card/MediaControlCard.jsx"
import fridge from "../../assets/img/fridge.png";
import kettle from "../../assets/img/kettle.png";

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
                    {...rest}
                />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <MediaControlCard deviceName="Ustaw lodówkę" image={fridge} />
                            <MediaControlCard deviceName="Ustaw czajnik" image={kettle} />
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(homePageStyle)(HomePage);
