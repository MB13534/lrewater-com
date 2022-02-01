import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {},
  valueName: {
    fontSize: '30px',
    textTransform: 'uppercase',
    color: theme.palette.primary.main
  }
}));

const Values = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.values_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(4),
          },
        }}
      />
      <Grid container spacing={6}>
        {Object.entries(data.pageData.values).map(([key, value]) => (
          <Grid key={key} item xs={12} md={6}>
            <div style={{marginRight: theme.spacing(6)}}>
              <Typography
                variant="h3"
                className={classes.valueName}
                gutterBottom
              >
                {key}
              </Typography>
              <Typography variant="body2" >

              </Typography>
              <div style={{ marginBottom: theme.spacing(6) }} dangerouslySetInnerHTML={{ __html: value }} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Values;