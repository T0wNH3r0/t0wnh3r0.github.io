import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function AutoGrid(props) {
  const { classes, resumeData } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {resumeData.portfolio &&
          resumeData.portfolio.map(item => {
            return (
              <Grid item xs={6}>
                <MediaCard
                  name={item.name}
                  imgUrl={item.imgUrl}
                  url={item.url}
                  imgTitle={item.imgTitle}
                  description={item.description}
                  alt={item.alt}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutoGrid);
