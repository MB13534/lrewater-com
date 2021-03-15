import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      margin: '0 auto',
    },
  },
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
  name: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0),
  },
  toggleButton: {
    display: 'inline-block',
    cursor: 'pointer',
    width: 50,
    verticalAlign: 'middle',
    color: theme.palette.brand.primary,
  },
  expanded: {
    '& h4': {
      color: theme.palette.brand.primary,
    }
  }
}));

const Detail = props => {
  const { positions, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {positions.map((position, i) => {
        const isExpanded = expanded === `position${i}`;
        return (
          <div key={i} className={clsx({[classes.expanded]: isExpanded})}>
            <Typography
              variant="h4"
              className={classes.name}
              onClick={() => handleChange(`position${i}`)}
            >
              <div
                className={classes.toggleButton}
              >
                {isExpanded && (
                  <RemoveIcon fontSize="large" />
                )}
                {!isExpanded && (
                  <AddIcon fontSize="large" />
                )}
              </div>
              {position.name}
            </Typography>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <Box ml={6} pb={6}>
              <Typography variant="body2" style={{
                marginBottom: theme.spacing(4)
              }}>
                <div className={classes.body} dangerouslySetInnerHTML={{ __html: position.body }} />
              </Typography>
              <Button variant="outlined" color="primary" href={position.apply_cta_url} target="_blank" size="large">Apply Now</Button>
              </Box>
            </Collapse>
            <Divider />
          </div>
        )
      })}
    </div>
  )
}

export default Detail;