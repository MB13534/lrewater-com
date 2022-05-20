import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(2, 8),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 2),
    },
  },
  form: {
    width: '100%',
    paddingRight: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(4),
    },
  },
}));

const Construction = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box pb={4}>
        <Typography variant="h2" component="div">
          Please excuse our mess,
        </Typography>
        <Typography variant="h2" component="span">
          this page is currently{' '}
        </Typography>
        <Typography variant="h2" component="span" color="secondary">
          under construction.
        </Typography>
      </Box>
      <Box mt={8}>
        <Typography variant="h4" component="span" style={{ marginTop: '50px' }}>
          To view our historical annual runoff{' '}
        </Typography>
        <Typography variant="h4" component="span" color="primary">
          <a href="https://lrcwe.com/colorado-water-supply-outlook/" target="_blank" rel="noreferrer noopener">
            page
          </a>
        </Typography>
        <Typography variant="h4" component="span">
          , please click the link below:
        </Typography>
        <Box ml={8} mt={2}>
          <Button
            variant={'outlined'}
            size={'large'}
            color={'primary'}
            href="https://lrcwe.com/colorado-water-supply-outlook/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Historical Annual Runoff Page
          </Button>
        </Box>
      </Box>

      <Box mt={8}>
        <Typography variant="h4" component="span">
          Or to view the historical annual runoff as a{' '}
        </Typography>
        <Typography variant="h4" component="span" color="primary">
          <a
            href="https://lrcwe.com/wp-content/uploads/2021/06/RiverRunoffDiagram2021.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            PDF
          </a>
        </Typography>
        <Typography variant="h4" component="span">
          , please click the link below:
        </Typography>
        <Box ml={8} mt={2}>
          <Button
            variant={'outlined'}
            size={'large'}
            color={'primary'}
            target="_blank"
            rel="noreferrer noopener"
            href="https://lrcwe.com/wp-content/uploads/2021/06/RiverRunoffDiagram2021.pdf"
          >
            Historical Annual Runoff PDF
          </Button>
        </Box>
      </Box>
    </div>
  );
};

Construction.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Construction;
