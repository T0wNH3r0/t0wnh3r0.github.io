import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
    fontSize: '16px'
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class ChipsArray extends React.Component {
  state = {
    chipData: [
      { icon: 'star', label: 'React' },
      { icon: 'star', label: 'C#' },
      { icon: 'star', label: 'MVC' },
      { label: 'Javascript' },
      { label: 'HTML5' },
      { label: 'CSS' },
      { icon: 'star', label: 'SQL' },
      { label: 'SSRS' },
      { label: 'Bootstrap' },
      { label: 'Java' },
      { label: 'Entity Framework' },
      { label: 'Git' },
      { label: 'Web Applications' },
      { label: 'Web Design' },
      { label: 'User Interface Design' },
      { label: 'Agile & Waterfall' }
    ]
  };

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        {this.state.chipData.map(data => {
          let icon = null;

          //   if (data.icon) {
          //     icon = (
          //       <Icon
          //         className={classNames('fa fa-' + data.icon)}
          //         style={{ fontSize: '16px' }}
          //         aria-hidden={true}
          //       />
          //     );
          //   }

          return (
            <Chip
              key={data.label}
              icon={icon}
              label={data.label}
              className={classes.chip}
              color={'secondary'}
              style={{fontSize:'inherit'}}
            />
          );
        })}
      </Paper>
    );
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipsArray);
