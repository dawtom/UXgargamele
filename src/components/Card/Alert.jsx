import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import warning from 'assets/img/warning.svg'
import info from 'assets/img/info.svg'


function Alert(props) {
  const { message, level, button1, button2, classes } = props;
  const image = level === "warning" ? warning : info;

  return (
      <GridItem xs={12} sm={12} md={8} >
        <div className={classes.communicate}>
          <GridItem xs={2} sm={2} md={2} style={{paddingLeft: 0, paddingRight: 0}}>
            <img src={image} alt="Severity" />
          </GridItem>
          <GridItem xs={5} sm={5} md={6}>
            <div className={classes.centeredContainer} style={{verticalAlign: "middle"}}>
              <span>{message}</span>
            </div>
          </GridItem>
          <GridItem xs={5} sm={5} md={4}>
            <div className={classes.centeredInRow}>
              {button1 !== null ? button1 : null}
              {button2 !== null ? button2 : null}
            </div>
          </GridItem>
        </div>
      </GridItem>
  );
}

export default Alert
