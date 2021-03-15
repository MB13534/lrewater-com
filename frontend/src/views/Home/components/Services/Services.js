import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import Image from '../../../../components/atoms/Image';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles(theme => ({
  root: {},
  serviceList: {

  },
  gridWrap: {
    justifyContent: 'center',
    paddingLeft: 100,
  },
  alternateService: {
    flexDirection: 'row-reverse',
  },
  serviceGroupName: {
    fontSize: '1.8rem',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
  },
  serviceName: {
    '& a': {
      fontFamily: '\'Montserrat\', sans-serif',
      fontWeight: 300,
      fontSize: '1.2rem',
      lineHeight: '2.2',
      color: '#53565A',
    },
    '& a:hover': {
      color: theme.palette.text.link,
    },
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  hexagon: {
    position: 'absolute',
    zIndex: -1,
  },
  hexagon0: {
    top: -100,
    left: -100,
  },
  hexagon1: {
    top: -100,
    right: 100,
  },
  hexagon2: {
    bottom: -100,
    right: 100,
  },
  hexagon3: {
    bottom: -100,
    left: -100,
  },
  hexagon4: {
    display: 'none',
  },
}));

const hexagonColors = [
  '#B7BF10',
  '#54565A',
  '#84C1D2',
  '#BCDDE7',
];

const GreenHexagonSvg = ({ fill }) =>
  <svg width="270" height="312" viewBox="0 0 270 312" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.2" d="M135 0.914551L270 78.6646V234.165L135 311.915L0 234.165L0 78.6646L135 0.914551Z"
          fill={fill} />
  </svg>;


const Services = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.services_title}
        align="center"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(12),
          },
        }}
      />
      <Grid container spacing={8}>
        {data.serviceGroups.map((serviceGroup, index) => {
          let image = serviceGroup.image.data.thumbnails.find(x => x.key === 'directus-medium-crop');
          return (
            <Grid item xs={12} key={index} data-aos="fade-up">
              <Grid container spacing={0}
                    className={clsx({[classes.gridWrap]: true, [classes.alternateService]: index % 2 })}>
                <Grid item sm={5} style={{ position: 'relative' }}>
                  <Image src={image.url} width={300} height={300} alt={serviceGroup.name} />
                  <div className={clsx(classes['hexagon' + index], classes.hexagon)}>
                    <GreenHexagonSvg fill={hexagonColors[index]} />
                  </div>
                </Grid>
                <Grid item sm={5}>
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    className={classes.serviceGroupName}
                    gutterBottom
                  >
                    {serviceGroup.name}
                  </Typography>
                  <ul className={classes.serviceList}>
                    {serviceGroup.services.map((service, index) => (
                      <li key={index} className={classes.serviceName}>
                        <Typography
                          variant={'body1'}
                          component={'a'}
                          href={`services/${service.id}`}
                        >
                          {service.name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

Services.propTypes = {};

export default Services;