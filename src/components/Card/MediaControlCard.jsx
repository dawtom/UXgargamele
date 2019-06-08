import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "15vh",
    height: "15vh",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function MediaControlCard(props) {
  const { deviceName, image, link, classes } = props;

  return (
      <Card style={{display: "flex"}} className={classes.card}>
          <img onClick={() => window.location = link}
                     src={image}
                     alt={deviceName}
                     style={{cursor: "pointer", width: "15vh", height: "15vh"}}
          />
          <CardContent style={{textAlign: "center", display: "grid", verticalAlign: "middle"}} className={classes.content}>
            <Button variant="contained" color="primary" size="large" href={link} style={{margin: "2vh", color: "white"}} className={classes.button}>
              {deviceName}
            </Button>
          </CardContent>
      </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
