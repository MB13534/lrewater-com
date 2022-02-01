import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 500,
    minHeight: 500,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: '0',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'cover',
    },
  },
  header: {
    alignSelf: 'center',
    zIndex: 1202,
  },
  hexagon: {
    position: 'absolute',
    top: '22px',
    left: '55px',
    zIndex: 1201,
    width: '400px',
    opacity: 0.8,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hexagon2: {
    position: 'absolute',
    top: '92px',
    left: '355px',
    zIndex: 1201,
    width: '400px',
    opacity: 0.8,
    transform: 'scale(0.7)',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const HexagonSvg = ({ color }) => (
  <svg
    style={{ width: '100%', height: '100%' }}
    width="590"
    height="680"
    viewBox="0 0 590 680"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M294.804 0L589.607 170V510L294.804 680L0 510V170L294.804 0Z" />
  </svg>
);

const PageHero = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const heroBgStyle = {
    position: 'relative',
    backgroundImage: `url('${data.banner_image.data.full_url}')`,
  };

  return (
    <div className={clsx(classes.root, className)} style={data.banner_image ? heroBgStyle : ''} {...rest}>
      <div className={classes.hexagon}>
        <HexagonSvg color="black" />
      </div>
      <div className={classes.hexagon2}>
        <HexagonSvg color="#0092BC" />
      </div>
      <SectionHeader
        className={classes.header}
        style={{ margin: theme.spacing(0, -2), padding: theme.spacing(3) }}
        title={data.banner_title}
        subtitle={data.banner_subtitle}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'white',
            textTransform: 'uppercase',
            width: '85%',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginLeft: theme.spacing(8),
          },
        }}
        subtitleProps={{
          variant: 'h5',
          style: {
            color: 'white',
            fontWeight: 300,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            width: '65%',
            textShadow: '1px 1px 0px rgba(0,0,0,0.2)',
            marginLeft: theme.spacing(8),
          },
        }}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

PageHero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default PageHero;
