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

import GridItem from "components/Grid/GridItem.jsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import timer from 'assets/img/timer.svg'
import thermometer from 'assets/img/thermometer.svg'
import clock from 'assets/img/time.svg'
import TextField from '@material-ui/core/TextField';
import Alert from 'components/Card/Alert.jsx'

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
        grzalkaGorna: true,
        grzalkaDolna: true,
        termoobieg: false,
        wentylator: false,
        duzyGrill: false,
        malyGrill: false
    };

    setAdvancedTab = () => {
        this.setState({activeTab: 'advanced'})
    };

    setDefaultSettings = () => {
        this.setState({temperature: 200,
                            time_from: "15:00",
                            bake_time: "00:00",
                            grzalkaTylna: false,
                            grzalkaGorna: true,
                            grzalkaDolna: true,
                            termoobieg: false,
                            wentylator: false,
                            duzyGrill: false,
                            malyGrill: false})
    };

    setOvenTab = () => {
        this.setState({activeTab: 'oven'})
    };

    cancelOven = () => {
        this.setState({activeTab: 'cancelled'})
    };

    handleTimeFromChange(e) {
        this.setState({ time_from: e.target.value });
    }

    handleBakeTimeChange(e) {
        this.setState({ bake_time: e.target.value });
    }

    handleTemperatureChange(e) {
        this.setState({ temperature: e.target.value });
    }

    handleGrzalkaTylnaChange(e) {
        this.setState({ grzalkaTylna: e.target.checked });
    }

    handleGrzalkaGornaChange(e) {
        this.setState({ grzalkaGorna: e.target.checked });
    }

    handleGrzalkaDolnaChange(e) {
        this.setState({ grzalkaDolna: e.target.checked });
    }

    handleTermoobiegChange(e) {
        this.setState({ termoobieg: e.target.checked });
    }

    handleWentylatorChange(e) {
        this.setState({ wentylator: e.target.checked });
    }

    handleDuzyGrillChange(e) {
        this.setState({ duzyGrill: e.target.checked });
    }

    handleMalyGrillChange(e) {
        this.setState({ malyGrill: e.target.checked });
    }




    render() {
        const {classes, ...rest} = this.props;
        const {activeTab} = this.state;

        const cancelButton = <Button onClick={this.cancelOven} style={{paddingLeft: "10px", paddingRight: "10px", marginLeft: "5px"}}>Anuluj</Button>;

        const advancedButton = activeTab !=='advanced' && activeTab !== 'oven' ? <Button color='primary' simple onClick={this.setAdvancedTab}>Zaawansowane</Button> : <Button color='primary' simple disabled={true}>Zaawansowane</Button>;
        const defaultButton = activeTab !== 'oven' ? <Button color='primary' simple onClick={this.setDefaultSettings}>Domyślne</Button> : <Button color='primary' simple disabled={true}>Domyślne</Button>;
        const setButton = activeTab !== 'oven' ? <Button color='primary' onClick={this.setOvenTab}>Ustaw</Button> : <Button color='primary' disabled={true}>Ustaw</Button>;

        let activeTabElement;
        switch (activeTab) {
            case 'advanced':
                activeTabElement = <div className={classes.labels}>
                    <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.grzalkaTylna}
                            onChange={this.handleGrzalkaTylnaChange.bind(this)}
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
                                checked={this.state.grzalkaGorna}
                                onChange={this.handleGrzalkaGornaChange.bind(this)}
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
                                checked={this.state.grzalkaDolna}
                                onChange={this.handleGrzalkaDolnaChange.bind(this)}
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
                                checked={this.state.termoobieg}
                                onChange={this.handleTermoobiegChange.bind(this)}
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
                                checked={this.state.wentylator}
                                onChange={this.handleWentylatorChange.bind(this)}
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
                                checked={this.state.duzyGrill}
                                onChange={this.handleDuzyGrillChange.bind(this)}
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
                                checked={this.state.malyGrill}
                                onChange={this.handleMalyGrillChange.bind(this)}
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
                    />
                </div>;
                break;
            case 'default':
                activeTabElement = <div></div>;
                break;
            case 'oven':
                activeTabElement = <Alert message={<span>Piekarnik ustawiony: <br/>
                                    Godzina rozpoczęcia {this.state.time_from}<br/>
                                    Czas {this.state.bake_time}h<br/>
                                    Temperatura {this.state.temperature}°C
                </span>} level="info" button2={cancelButton} overrideGrid={true} classes={classes} />;
                break;
                case 'cancelled':
                activeTabElement =  <Alert message={<span>Anulowano ustawienie piekarnika</span>} level="info" overrideGrid={true} classes={classes}/>;
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
                    brand="Piekarnik"
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
                                    <img height={imgSize} width={imgSize} src={oven_img} alt="Oven"/>
                                </div>
                                <div>
                                    <div className={classes.option}>
                                        <img src={clock} alt="time"/>
                                        <TextField type='time' value={this.state.time_from} onChange={ this.handleTimeFromChange.bind(this) }  InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 300, // 5 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={timer} alt="length"/>
                                        <TextField value={this.state.bake_time} onChange={ this.handleBakeTimeChange.bind(this) } type='time' InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 60, // 1 min
                                                   }}/>
                                    </div>
                                    <div className={classes.option}>
                                        <img src={thermometer} alt="temperature"/>
                                        <TextField type='number' placeholder='temperatura [°C]' value={this.state.temperature} onChange={ this.handleTemperatureChange.bind(this) } InputLabelProps={{
                                            shrink: true,
                                        }}
                                                   inputProps={{
                                                       step: 1,
                                                   }}/>
                                    </div>
                                </div>
                            </GridItem>
                            <GridItem item xs={12} sm={12} md={12} style={{marginTop: '50px'}}>
                                <GridItem item xs={12} sm={12} md={12} className={classes.buttons}>
                                    {advancedButton}
                                    {defaultButton}
                                    {setButton}
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
        );
    }
}

export default withStyles(ovenPageStyle)(OvenPage);
