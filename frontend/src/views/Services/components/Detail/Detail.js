import { Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    textTransform: 'uppercase'
  },
  body: {

  }
}));

const Detail = props => {
  const { service, className, ...rest } = props;
  const classes = useStyles();

  let image = service.service_group.image.data.thumbnails.find(x => x.key === 'directus-medium-contain');

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography
        variant="h1"
        color="textPrimary"
        className={classes.title}
        gutterBottom
      >
        {service.name}
      </Typography>
      <Box pb={2}>
      <Image src={image.url} width={300} height={300} alt={service.service_group.name} />
      </Box>
      <Typography
        variant="body2"
        className={classes.body}
        gutterBottom
      >
        <div dangerouslySetInnerHTML={{__html: service.description}} />
      </Typography>
    </div>
  )
}

export default Detail;