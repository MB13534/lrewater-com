import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(2, 8),
  }
}));



const Form = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box pb={4}>
        <TextField
          label="Full Name"
          variant={'outlined'}
          fullWidth
          className={classes.textField}
        />
        <TextField
          label="E-Mail"
          variant={'outlined'}
          fullWidth
          className={classes.textField}
        />
        <TextField
          label="Message"
          variant={'outlined'}
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
        />
      </Box>
      <Box ml={8}>
        <Button
          variant={'outlined'}
          size={'large'}
          color={'primary'}
          href={'/contact'}
        >
          Send Message
        </Button>
      </Box>
    </div>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;