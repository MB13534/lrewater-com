import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResourceCard from '../ResourceCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0, 8, 0),
  },

}));

const ResourceList = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        {data.resources.map(resource => (
          <Grid key={resource.name} item xs={12} sm={6} md={4}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ResourceList.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ResourceList;
