import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Quote = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <>
      <div className={clsx(classes.root, className)} {...rest}>
        <Carousel animation="slide" indicators={true} interval={8000} style={{ height: '100%' }}>
          {data?.testimonials &&
          data.testimonials.map(testimonial => (
            <Box key={testimonial.people?.name} style={{ minHeight: '400px' }} display="flex" justifyContent="center" flexDirection="column">
              <Typography
                variant={'h2'}
                align={'center'}
                style={{ fontWeight: 300, textTransform: 'uppercase', width: '80%', margin: '0 auto' }}
              >
                {testimonial.body}
              </Typography>
              {testimonial.people?.name && (
                <Typography
                  variant={'h4'}
                  align={'center'}
                  style={{ fontWeight: 300, fontStyle: 'italic', width: '80%', margin: '0 auto', color: '#ccc' }}
                >
                  {`— ${testimonial.people.name}, ${testimonial.people.title}`}
                </Typography>
              )}
            </Box>
          ))}
        </Carousel>
      </div>
      <Box pt={10} style={{ textAlign: 'center' }}>
        <Button
          variant={data.pageData.cta_link[0].variant}
          color={data.pageData.cta_link[0].color}
          component="a"
          size="large"
          href={data.pageData.cta_link[0].href}
        >
          {data.pageData.cta_link[0].label}
        </Button>
      </Box>
    </>
  );
};

export default Quote;
