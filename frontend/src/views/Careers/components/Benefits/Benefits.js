import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  body: {
    "& ul li": {
      marginLeft: theme.spacing(6),
    }
  },
}));

const Benefits = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.benefits_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(2),
          },
        }}
      />
      <Grid container spacing={8}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="body2"
            className={classes.body}
          >
          </Typography>
          <div className={classes.body} style={{marginBottom: theme.spacing(6)}} dangerouslySetInnerHTML={{ __html: data.pageData.benefits_body }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Benefits;