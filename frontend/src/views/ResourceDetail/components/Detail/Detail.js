import { Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    textTransform: 'uppercase'
  },
  body: {
    '& p': {
      marginBottom: theme.spacing(4),
    },
    '& ul': {
      marginBottom: theme.spacing(4),
    },
    '& ul li': {
      marginLeft: theme.spacing(4),
    },
    '& h2': {
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
      fontFamily: '\'Montserrat\'',
      fontWeight: 900,
      fontSize: '26px',
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    '& figcaption': {
      fontSize: '16px',
      textAlign: 'center',
    },
    '& a': {
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  date: {
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    '& span': {
      color: theme.palette.primary.main,
    }
  },
}));

const Detail = props => {
  const { resource, className, ...rest } = props;
  const classes = useStyles();

  let image = resource.image.data.thumbnails.find(x => x.key === 'directus-large-contain');

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="h6" className={clsx(classes.date)}>
        Posted On <span>{moment(resource.date_posted).format('MMMM D, YYYY')}</span>
        {resource.author && (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Article By <span>{resource.author.name}</span>
          </>
        )}
      </Typography>
      <Typography
        variant="h1"
        color="textPrimary"
        className={classes.title}
        gutterBottom
      >
        {resource.name}
      </Typography>
      <Box pb={2}>
      <Image src={image.url} width="100%" height="auto" alt={resource.name} />
      </Box>
      <Typography
        variant="body2"
        className={classes.body}
        gutterBottom
      >
        <div dangerouslySetInnerHTML={{__html: resource.body}} />
      </Typography>
    </div>
  )
}

export default Detail;