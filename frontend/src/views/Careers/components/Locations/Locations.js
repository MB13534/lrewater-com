import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';
import Image from '../../../../components/atoms/Image';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
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
  },
  cardTitle: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    padding: theme.spacing(2),
    '& p': {
      fontSize: '16px',
      fontWeight: 'normal',
      textTransform: 'none',
    }
  },
  placeholderTitle: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    padding: theme.spacing(2),
    '& p': {
      fontSize: '16px',
      fontWeight: 'normal',
      textTransform: 'none',
    }
  },
  cardImage: {
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
    '& .lazy-load-image-background': {
      display: 'block !important',
    },
    '&:hover h6': {
      display: 'block',
    },
    '&:hover::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      opacity: 0.5,
    },
    '&:hover': {

    }
  }
}));

const Locations = props => {
  const { data, className, google, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  console.log(data);
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={0}>
        {data.locations.map((location, index) => {
          if (index === 4) {
            return (
              <>
                <Hidden smDown>
                  <Grid item xs={12} md={4} style={{position: 'relative'}}>
                      <Typography
                        variant="h6"
                        className={classes.placeholderTitle}
                      >
                        More Locations Coming Soon
                      </Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={12} md={4}>
                  <Link href={`/careers/${location.id}`} className={classes.cardImage}>
                    {location.image && (
                      <Image
                        src={location.image.data.thumbnails.find(x => x.key === 'directus-medium-crop').url}
                        width={'100%'}
                        height="auto"
                        alt={location.title}
                      />
                    )}
                    <Typography
                      variant="h6"
                      className={classes.cardTitle}
                    >
                      {location.name}
                      <p>{location.positions.length} Positions</p>
                    </Typography>
                  </Link>
                </Grid>
              </>
            );
          } else {
            return (
              <Grid item xs={12} md={4}>
                <Link href={`/careers/${location.id}`} className={classes.cardImage}>
                  {location.image && (
                    <Image
                      src={location.image.data.thumbnails.find(x => x.key === 'directus-medium-crop').url}
                      width={'100%'}
                      height="auto"
                      alt={location.title}
                    />
                  )}
                  <Typography
                    variant="h6"
                    className={classes.cardTitle}
                  >
                    {location.name}
                    <p>{location.positions.length} Positions</p>
                  </Typography>
                </Link>
              </Grid>
            )
          }
        }
        )}
      </Grid>
    </div>
  );
};

export default Locations;