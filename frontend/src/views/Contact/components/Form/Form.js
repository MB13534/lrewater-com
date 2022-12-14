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

const Form = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <form name="contact" data-netlify="true" className={classes.form} method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <Box pb={4}>
          <TextField label="Full Name" name="fullname" variant={'outlined'} fullWidth className={classes.textField} />
          <TextField label="E-Mail" name="email" variant={'outlined'} fullWidth className={classes.textField} />
          <TextField label="Message" name="message" variant={'outlined'} fullWidth multiline rows={4} className={classes.textField} />
        </Box>
        <Box ml={8}>
          <Button variant={'outlined'} size={'large'} color={'primary'}
                  // href={'/contact'}
                  type="submit">
            Send Message
          </Button>
        </Box>
      </form>
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
