import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate,
  },
  dark: {
    background: theme.palette.brand.dark,
  },
  inner: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 2),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = props => {
  const { children, dark, innerNarrowed, className, ...rest } = props;

  const classes = useStyles();

  return (
    <section
      className={clsx('section-alternate', classes.root, dark ? classes.dark : '', className)}
      {...rest}
    >
      <div
        className={clsx(
          'section-alternate__content',
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {},
        )}
      >
        {children}
      </div>
    </section>
  );
};

SectionAlternate.propTypes = {
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  innerNarrowed: PropTypes.bool,
};

export default SectionAlternate;
