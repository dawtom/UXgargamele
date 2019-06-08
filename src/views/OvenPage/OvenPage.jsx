import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ovenPageStyle from "assets/jss/material-kit-react/views/ovenPage.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import oven_img from "../../assets/img/oven.png"
import clock from "../../assets/img/clock.png"
import countdown from "../../assets/img/countdown.png"
import temperature from "../../assets/img/temperature.png"
import TextField from '@material-ui/core/TextField';

import Favorite from '@material-ui/icons/Favorite';
import GridItem from "components/Grid/GridItem.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import info from 'assets/img/info.svg'

const dashboardRoutes = [];

class OvenPage extends React.Component {

    state = {
        activeTab: 'oven'
    }

    setAdvancedTab = () => {
        this.setState({activeTab: 'advanced'})
    }

    setDefaultTab = () => {
        this.setState({activeTab: 'default'})
    }

    setOvenTab = () => {
        this.setState({activeTab: 'oven'})
    }

    render() {
        const {classes, ...rest} = this.props;
        const {activeTab} = this.state

        let activeTabElement;
        switch (activeTab) {
            case 'advanced':
                activeTabElement = <div className={classes.labels}><FormControlLabel
                    control={
                        <Switch
                            value="checkedA"
                            classes={{
                                switchBase: classes.switchBase,
                                checked: classes.switchChecked,
                                icon: classes.switchIcon,
                                iconChecked: classes.switchIconChecked,
                                bar: classes.switchBar
                            }}
                        />
                    }
                    classes={{
                        label: classes.label
                    }}
                    label="Grzałka tylna"
                />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Grzałka górna"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Grzałka dolna"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Termobieg"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Wentylator"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Duży grill"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                value="checkedA"
                                classes={{
                                    switchBase: classes.switchBase,
                                    checked: classes.switchChecked,
                                    icon: classes.switchIcon,
                                    iconChecked: classes.switchIconChecked,
                                    bar: classes.switchBar
                                }}
                            />
                        }
                        classes={{
                            label: classes.label
                        }}
                        label="Mały grill"
                    /></div>
                break;
            case 'default':
                activeTabElement = <div></div>
                break;
            case 'oven':
                activeTabElement = <div className={classes.communicate}>
                    <div className={classes.centeredContainer}>
                        <img src={info} className={classes.image}/>
                        <span>Piekarnik ustawiony na: <br/> godzina 15:10<br/> czas 50 minut<br/> temperatura 200°</span>
                    </div>
                    <div className={classes.centeredInColumns}>
                        <Button color='danger' simple>Anuluj</Button>
                    </div>
                </div>
                break;
            default:
                activeTabElement = null
        }

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
                    <GridItem className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem item xs={6} sm={6} md={6}>
                                <GridItem xs={12} sm={12} md={12}><img src={oven_img} style={{width: "100%"}}/></GridItem>
                            </GridItem>
                            <GridItem item xs={6} sm={6} md={6}>
                                <GridItem item xs={12} sm={12} md={12}>
                                    <img src={clock} style={{width: "33%"}}/>
                                    <form style={{width: "60%", height: "100%", float: "right"}} className={classes.container} noValidate>
                                        <TextField
                                            id="time"
                                            label="Alarm clock"
                                            type="time"
                                            defaultValue="07:30"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                        />
                                    </form>

                                    {/*<img src={clock} style={{width: "33%"}}/>*/}
                                </GridItem>
                                <GridItem item xs={12}  sm={12} md={12}>
                                    <img src={countdown} style={{width: "33%"}}/>
                                    <img src={clock} style={{width: "33%"}}/>
                                    <img src={clock} style={{width: "33%"}}/></GridItem>
                                <GridItem item xs={12} sm={12} md={12}>
                                    <img src={temperature} style={{width: "33%"}}/>
                                    <img src={clock} style={{width: "33%"}}/>
                                    <img src={clock} style={{width: "33%"}}/>
                                </GridItem>
                            </GridItem>


                            {/*GIT CONFLICT BORDER! DO NOT CROSS*/}

                            <GridItem item xs={12} sm={12} md={12} style={{marginTop: '50px'}}>
                                <GridItem item xs={12} sm={12} md={12} className={classes.buttons}>
                                    <Button color='primary' simple onClick={this.setAdvancedTab}>Zaawansowane</Button>
                                    <Button color='primary' simple onClick={this.setDefaultTab}>Domyślne</Button>
                                    <Button color='secondary' onClick={this.setOvenTab}>Ustaw</Button>
                                </GridItem>
                                <GridItem item xs={12} sm={12} md={6}>
                                    <div className={classes.labels}>
                                        {activeTabElement}
                                    </div>
                                </GridItem>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </div>
            </div>
        );
    }
}

export default withStyles(ovenPageStyle)(OvenPage);
