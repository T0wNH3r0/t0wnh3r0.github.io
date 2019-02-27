import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const styles = {
  card: {
    marginBottom: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: '1rem',
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes, imgurl, name, description, url } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography align={'center'}>
          <Icon
            className={classNames('fa fa-' + imgurl)}
            fontSize={'large'}
            aria-hidden={true}
          />
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          align={'center'}
        >
          {name}
        </Typography>
        <Typography variant="headline" component="h2" align={'center'}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={url}
          size="small"
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
