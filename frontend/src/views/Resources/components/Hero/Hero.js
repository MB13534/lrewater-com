import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ResourceCard from '../ResourceCard';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(12, 4, 0, 4),
    position: 'relative',
  },
  linkListItem: {
    fontSize: '30px',
  },
}));

const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  if (data.resources.length > 0) data.featuredResource = data.resources[0];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">RESOURCES</Typography>
          <Hidden smDown>
            <Box mt={12} pr={26}>
              {/*{data.resourceTypes.map(resourceType => (*/}
              {/*  <div key={resourceType.name}><Link href={'#'} color={'textSecondary'} className={classes.linkListItem}>{resourceType.name}</Link></div>*/}
              {/*))}*/}

              <Typography variant={'body2'}>
                Browse our articles and check out the latest water resources and engineering news.
              </Typography>
            </Box>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <ResourceCard size={'large'} resource={data.featuredResource} />
          </Grid>

          <div
            style={{
              backgroundColor: '#F5F4F2',
              width: '480px',
              height: '910px',
              left: theme.spacing(-12),
              position: 'absolute',
              zIndex: -1,
              top: theme.spacing(-12),
            }}
          >
            &nbsp;
          </div>
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
