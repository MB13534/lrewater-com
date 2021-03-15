import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from '../../../../components/atoms/Image';
import Hidden from '@material-ui/core/Hidden';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    top: `0`,
    left: `0`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'relative',
    overflowY: 'auto',
  },
  paper: {
    position: 'relative',
    width: 'calc(100% - 100px)',
    height: 'auto',
    overflowY: 'auto',
    backgroundColor: theme.palette.brand.dark,
    padding: theme.spacing(6),
    margin: '50px',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
      margin: '10px',
    },
    '&:focus, & *:focus': {
      outline: 'none',
    },
  },
  name: {
    color: 'white',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '28px'
    }
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    '& span': {
      fontFamily: theme.typography.body2.fontFamily,
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
  },
  email: {
    color: 'white',
    textTransform: 'uppercase',
    marginTop: theme.spacing(4),
    '& span': {
      color: theme.palette.primary.main,
    },
  },
  phone: {
    color: 'white',
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
    '& span': {
      color: theme.palette.primary.main,
    },
  },
  bio: {
    fontSize: '16px',
    color: 'white',
    lineHeight: 1.9,
    marginRight: theme.spacing(8),
  },
  iconButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(0),
      right: theme.spacing(0),
    }
  },
  icon: {
    color: 'white',
  },
}));

export default function PeopleModal(props) {
  const { person, className, onClose, open, setOpen, ...rest } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="h1"
        className={classes.name}
      >
        {person.name}
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <Image
            src={person.image.data.thumbnails.find(x => x.key === 'directus-medium-contain').url}
            width={'100%'}
            height="auto"
            alt={person.name}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            className={classes.title}
          >
            {person.title}
            {person.location &&
            <span><Hidden smDown> &nbsp;&nbsp; | &nbsp;&nbsp; </Hidden>{person.location.name}</span>
            }
          </Typography>
          <div className={classes.bio}>
            <div dangerouslySetInnerHTML={{ __html: person.bio }} />
          </div>
          {person.email &&
          <Typography
            variant="h6"
            className={classes.email}
          >
            Email <span>{person.email}</span>
          </Typography>
          }
          {person.phone &&
          <Typography
            variant="h6"
            className={classes.phone}
          >
            Call <span>{person.phone}</span>
          </Typography>
          }
        </Grid>
      </Grid>
      <IconButton onClick={handleClose} className={classes.iconButton}>
        <ClearIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
