import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Mission = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.mission_title}
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
      {data.pageData.mission_image && (
        <Box mb={4}>
          <Image
            src={data.pageData.mission_image.data.full_url}
            width={'100%'}
            height="auto"
            alt={data.pageData.mission_image.title}
          />
        </Box>
      )}
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="body2"></Typography>
          <div
            style={{ marginBottom: theme.spacing(6) }}
            dangerouslySetInnerHTML={{ __html: data.pageData.mission_body }}
          />
          <Button variant={'outlined'} size={'large'} color={'primary'} href={'/culture'}>
            Culture
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mission;
