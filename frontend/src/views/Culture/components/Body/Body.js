import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Body = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
          >
          </Typography>
          <div style={{marginBottom: theme.spacing(6)}} dangerouslySetInnerHTML={{ __html: data.pageData.body }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;