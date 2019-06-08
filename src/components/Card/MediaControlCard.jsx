import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { deviceName, image, classes, theme } = props;

  return (
      <Card className={classes.card}>
        <CardMedia
            className={classes.cover}
            image={image}
            title={deviceName}
        />
        {/*<div className={classes.details}>*/}
          <CardContent style={{height: 200, width: "800px", textAlign: "center", padding: 80}} className={classes.content}>
            <Button variant="contained" color="primary" size="large" className={classes.button}>
              {deviceName}
            </Button>
          </CardContent>
        {/*</div>*/}
      </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
