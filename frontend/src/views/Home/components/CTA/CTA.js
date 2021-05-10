import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      '& .section-header__title': {
        fontSize: '1.2rem !important',
      }
    }
  },
}));



const CTA = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        className={classes.header}
        style={{ margin: theme.spacing(0, -2), padding: theme.spacing(3) }}
        title={data.cta_body}
        titleProps={{
          variant: 'h5',
          style: {
            textAlign: 'center',
            color: '#53565A',
            fontWeight: '300',
            textTransform: 'uppercase',
            width: '80%',
            fontSize: '1.5rem',
            display: 'inline-block',
            lineHeight: '1.7'
          },
        }}
        ctaGroup={[
          <Button
            size="large"
            variant={data.cta_link[0].variant}
            color={data.cta_link[0].color}
            component="a"
            href={data.cta_link[0].href}
          >
            {data.cta_link[0].label}
          </Button>,
        ]}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
};

CTA.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default CTA;
