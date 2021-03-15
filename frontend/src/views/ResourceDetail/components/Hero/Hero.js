import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

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
    }
  },
  header: {
    alignSelf: 'center',
    zIndex: 1202,
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
}));

const HexagonSvg = () =>
  <svg style={{width: '100%', height: '100%'}} width="590" height="680" viewBox="0 0 590 680" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M294.804 0L589.607 170V510L294.804 680L0 510V170L294.804 0Z" fill="url(#paint0_linear)" />
    <defs>
      <linearGradient id="paint0_linear" x1="294.804" y1="0" x2="294.804" y2="680" gradientUnits="userSpaceOnUse">
        <stop stop-color="#003851" />
        <stop offset="1" stop-color="#AEDADB" />
      </linearGradient>
    </defs>
  </svg>;

const Hero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const heroBgStyle = {
    position: 'relative',
    backgroundImage: `url('${data.background_image.data.full_url}')`,
  };

  return (
    <div className={clsx(classes.root, className)} style={heroBgStyle} {...rest}>
      {data.show_hexagon && (
      <div className={classes.hexagon}>
        <HexagonSvg />
      </div>
      )}
      <SectionHeader
        className={classes.header}
        style={{ margin: theme.spacing(0, -2), padding: theme.spacing(3) }}
        title={data.title}
        subtitle={data.subtitle}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'white',
            textTransform: 'uppercase',
            width: '85%',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
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

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
