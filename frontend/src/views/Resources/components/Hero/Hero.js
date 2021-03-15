import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ResourceCard from '../ResourceCard';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 0),
    position: 'relative',

  },
  linkListItem: {
    fontSize: '30px',
  }
}));


const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  if (data.resources.length > 0)
    data.featuredResource = data.resources[0];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">RESOURCES</Typography>
          <Box mt={12}>
            {data.resourceTypes.map(resourceType => (
              <div key={resourceType.name}><Link href={'#'} color={'textSecondary'} className={classes.linkListItem}>{resourceType.name}</Link></div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ResourceCard size={'large'} resource={data.featuredResource} />
        </Grid>
        <Hidden smDown>
        <div style={{
          backgroundColor: '#F5F4F2',
          width: '480px',
          height: '910px',
          left: theme.spacing(-12),
          position: 'absolute',
          zIndex: -1,
          top: theme.spacing(-12),
        }}>&nbsp;</div>
        </Hidden>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
