import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import stripHtml from "string-strip-html";
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
  },
  smallMode: {

  },
  bodySmall: {
    fontSize: '16px',
    lineHeight: '1.8',
  },
  body: {

  },
  imageTag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    padding: theme.spacing(2, 2, 2, 0),
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  date: {
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    '& span': {
      color: theme.palette.primary.main,
    }
  },
  title: {
    '& a': {
      color: 'black',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    fontSize: '26px',
    textTransform: 'uppercase',
  },
  titleSmall: {
    fontSize: '20px',
  },
  link: {
    fontSize: '14px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  }
}));


const ResourceCard = props => {
  const { resource, className, size = 'small', ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  let image = resource.image?.data.thumbnails.find(x => x.key === 'resource-thumb');
  if (!image) image = { url: '#'};

  return (
    <div className={clsx(classes.root, className, size === 'small' ? classes.smallMode : '')} {...rest}>
        <Box mb={3} style={{position: 'relative'}}>
          <Link href={`/resources/${resource.id}`}>
            <Image src={image.url} width={'100%'} height="auto" alt={resource.name} />
          </Link>
          <Typography variant="h6" className={classes.imageTag}>
            {resource.resource_type.name}
          </Typography>
        </Box>
      <Typography variant="h6" className={clsx(classes.date, {[classes.dateSmall]: size === 'small'})}>
        Posted On <span>{moment(resource.date_posted).format('MMMM D, YYYY')}</span>
      </Typography>
      <Typography variant="h4" className={clsx(classes.title, {[classes.titleSmall]: size === 'small'})} gutterBottom>
        <Link href={`/resources/${resource.id}`}>{resource.name}</Link>
      </Typography>
      <Typography variant="body2" className={clsx(classes.body, {[classes.bodySmall]: size === 'small'})}>
        {stripHtml(resource.body).result.substr(0,255)}...
      </Typography>
      <Link href={`/resources/${resource.id}`} className={classes.link} variant={'button'} color={'textPrimary'}>Read More</Link>
    </div>
  );
};

ResourceCard.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,


  size: PropTypes.oneOf([
    "small",
    "large",
  ]),
};

export default ResourceCard;
