import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
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
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            style={{marginBottom: theme.spacing(6), marginLeft: theme.spacing(4)}}
          >
            <div dangerouslySetInnerHTML={{ __html: data.pageData.benefits_bullets }} />
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            style={{marginBottom: theme.spacing(6)}}
          >
            <div dangerouslySetInnerHTML={{ __html: data.pageData.benefits_body }} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Benefits;