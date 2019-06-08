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

import Favorite from '@material-ui/icons/Favorite';
import GridItem from "components/Grid/GridItem.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import info from 'assets/img/info.svg'
import timer from 'assets/img/timer.svg'
import thermometer from 'assets/img/thermometer.svg'
import clock from 'assets/img/time.svg'
import TextField from '@material-ui/core/TextField';

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
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem item xs={12} sm={10} md={4} style={{
                                marginTop: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <img height={imgSize} width={imgSize} src={oven_img}/>
                                </div>
                                <div>
                                    <div className={classes.option}>
                                        <img src={clock}/>
                                        <TextField type='time' defaultValue='15:30' InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={timer}/>
                                        <TextField type='time' defaultValue='15:30' InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={thermometer}/>
                                        <TextField type='time' defaultValue='200' InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                </div>
                            </GridItem>
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
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default withStyles(ovenPageStyle)(OvenPage);
