import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';
const MapboxGLMap = dynamic(() => import('../../../../common/MapboxGLMap'), {
  loading: () => "Loading...",
  ssr: false,
});


const useStyles = makeStyles(theme => ({
  root: {},
  name: {
    fontSize: '20px',
    color: 'white',
    textTransform: 'uppercase',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  phone: {
    marginBottom: theme.spacing(2),
    fontSize: '18px'
  },
  address: {
    fontSize: '18px'
  }
}));

const Locations = props => {
  const { data, className, google, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.locations_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'white',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(4),
          },
        }}
      />
      <Grid container spacing={4} style={{justifyContent:'center'}}>
        {data.locations.map((location, i) => (
          <Grid item xs={12} md={6}>
            <MapboxGLMap address={location.address}/>
            <Typography variant="h6" className={classes.name}>
              {location.name}
            </Typography>
            <div className={classes.address}>{location.address}</div>
            <div className={classes.phone}>{location.phone}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Locations;