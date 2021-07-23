import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 500,
    minHeight: 500,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    backgroundSize: 'contain',
    margin: '0',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover'
    },
  },
  header: {
    alignSelf: 'center',
    zIndex: 1202,
    [theme.breakpoints.down('sm')]: {
      '& .section-header__title': {
        fontSize: '2.9rem !important',
      }
    }

  },
  hexagon: {
    position: 'absolute',
    top: '-30px',
    left: '145px',
    zIndex: 1201,
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  video: {
    top: 0,
    left: 0,
    width: '99vw',
    height: 'auto',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const HexagonSvg = () =>
  <svg style={{width: '100%', height: '100%'}} width="590" height="680" viewBox="0 0 590 680" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M294.804 0L589.607 170V510L294.804 680L0 510V170L294.804 0Z" fill="url(#paint0_linear)" />
    <defs>
      <linearGradient id="paint0_linear" x1="294.804" y1="0" x2="294.804" y2="680" gradientUnits="userSpaceOnUse">
        <stop stopColor="#003851" />
        <stop offset="1" stopColor="#AEDADB" />
      </linearGradient>
    </defs>
  </svg>;

const VideoHero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const heroBgStyle = {

    backgroundImage: `url('${data.background_image.data.full_url}')`,
  };

  return (
    <div className={clsx(classes.root, className)} style={heroBgStyle} {...rest}>
      {data.show_hexagon && (
      <div className={classes.hexagon}>
        <HexagonSvg />
      </div>
      )}
      <video className={classes.video} autoPlay="autoplay" muted="muted" poster="none" loop="true">
        <source src={`${process.env.DIRECTUS_ENDPOINT}/assets/qemacq11qfk8cwso`} type="video/mp4"/>
      </video>
      <SectionHeader
        className={classes.header}
        style={{ margin: theme.spacing(0, -2), padding: theme.spacing(3) }}
        title={data.title}
        subtitle={data.subtitle}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            fontSize: '4rem',
            color: 'white',
            textTransform: 'uppercase',
            width: '65%',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
          },
        }}
        subtitleProps={{
          color: 'textPrimary',
          variant: 'h5',
        }}
        ctaGroup={
          data.cta_link.map(cta => (
            <Button
              size="large"
              variant={cta.variant}
              component="a"
              color={cta.color}
              href={cta.href}
            >
              {cta.label}
            </Button>
          ))
        }
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

VideoHero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default VideoHero;
