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

/**
 * @return {string}
 */

class OvenPage extends React.Component {


    state = {
        activeTab: 'default',
        temperature: 200,
        time_from: "15:00",
        bake_time: "00:00",
        grzalkaTylna: false,
        grzalkaGorna: false,
        grzalkaDolna: false,
        termoobieg: false,
        wentylator: false,
        duzyGrill: false,
        malyGrill: false
    };

    setAdvancedTab = () => {
        this.setState({activeTab: 'advanced'})
    };

    setDefaultTab = () => {
        this.setState({activeTab: 'default'})
    };

    setOvenTab = () => {
        this.setState({activeTab: 'oven'})
    };

    cancelOven = () => {
        this.setState({activeTab: 'cancelled'})
    };



    render() {
        const {classes, ...rest} = this.props;
        const {activeTab} = this.state;

        let activeTabElement;
        switch (activeTab) {
            case 'advanced':
                activeTabElement = <div className={classes.labels}><FormControlLabel
                    control={
                        <Switch
                            onChange={(e, c) => {
                                console.log('event:', e, c);
                                // this.state.grzalkaTylna = c;
                            }}
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
                                // checked={this.state.grzalkaGorna}
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
                                // checked={this.state.grzalkaDolna}
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
                                // checked={this.state.termoobieg}
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
                                // checked={this.state.wentylator}
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
                                // checked={this.state.duzyGrill}
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
                                // checked={this.state.malyGrill}
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
                    /></div>;
                break;
            case 'default':
                activeTabElement = <div></div>
                break;
            case 'oven':
                activeTabElement = <div  className={classes.communicate}>
                    <div className={classes.centeredContainer}>
                        <img src={info} className={classes.image}/>
                        <span>Piekarnik ustawiony: <br/>
                            Godzina rozpoczęcia{this.state.time_from}<br/>
                            Czas {this.state.bake_time} minut<br/>
                            Temperatura {this.state.temperature}°C<br/>
                            {/*<OvenElement value={this.state.grzalkaTylna} name="grzalkaTylna"/>*/}
                        </span>
                    </div>
                    <div className={classes.centeredInColumns}>
                        <Button onClick={this.cancelOven} color='danger' simple>Anuluj</Button>
                    </div>
                </div>;
                break;
                case 'cancelled':
                activeTabElement = <div  className={classes.communicate}>
                    <div className={classes.centeredContainer}>
                        <img src={info} className={classes.image}/>
                        <span>Anulowano ustawienie piekarnika</span>
                    </div>
                    <div className={classes.centeredInColumns}>
                        <Button onClick={this.cancelOven} color='danger' simple>Anuluj</Button>
                    </div>
                </div>;
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
                    brand="UXgargamele"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    backAvailable={true}
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
                                        <TextField type='time' value={this.state.time_from} InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={timer}/>
                                        <TextField value={this.state.bake_time} type='time' InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={thermometer}/>
                                        <TextField type='number' placeholder='temperatura [°C]' value={this.state.temperature} InputLabelProps={{
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
