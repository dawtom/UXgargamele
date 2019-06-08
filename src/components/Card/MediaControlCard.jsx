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
      <Card className={classes.card}>
        <CardMedia onClick={() => window.location = link}
            className={classes.cover}
            image={image}
            title={deviceName}
            style={{cursor: "pointer"}}
        />
        {/*<div className={classes.details}>*/}
          <CardContent style={{textAlign: "center"}} className={classes.content}>
            <Button variant="contained" color="primary" size="large" href={link} className={classes.button}>
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
