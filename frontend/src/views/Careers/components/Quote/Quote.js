import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Quote = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography
        variant={'h2'}
        align={'center'}
        style={{fontWeight:300, textTransform: 'uppercase', width: '80%', margin: '0 auto'}}
      >
        “{data.pageData.testimonial_body}”
      </Typography>
      <Typography
        variant={'h4'}
        align={'center'}
        style={{fontWeight:300, fontStyle:'italic', width: '80%', margin: '0 auto', color: '#ccc'}}
      >
        &mdash; {data.pageData.testimonial_author}
      </Typography>
      <Box pt={10} style={{textAlign: 'center'}}>
        <Button href={data.pageData.cta_link[0].href}>{data.pageData.cta_link[0].label}</Button>
      </Box>
    </div>
  );
};

export default Quote;