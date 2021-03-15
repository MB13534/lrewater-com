import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { PeopleAlt } from '@material-ui/icons';
import PeopleModal from './PeopleModal';

const useStyles = makeStyles(theme => ({
  root: {},
  personName: {
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  personTitle: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    padding: theme.spacing(2),
    '& p': {
      fontSize: '16px',
      fontWeight: 'normal',
      textTransform: 'none',
    }
  },
  personImage: {
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
    '& .lazy-load-image-background': {
      display: 'block !important',
    },
    '&:hover h6': {
      display: 'block',
    },
    '&:hover::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      opacity: 0.5,
    },
    '&:hover': {

    }
  }
}));

const People = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.people_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(12),
          },
        }}
      />
      <Grid container spacing={8}>
        {data.people.map((person, i) => {

          const [open, setOpen] = useState(false);

          function handleClose() {
            setOpen(false);
          }

          return (
            <Grid item xs={6} md={3}>
              <PeopleModal person={person} open={open} setOpen={setOpen} onClose={handleClose} />
              <Link href={`#`} className={classes.personImage}
                    onClick={(e) => { e.preventDefault(); setOpen(true); }}
              >
                <Image
                  src={person.image.data.thumbnails.find(x => x.key === 'directus-medium-contain').url}
                  width={'100%'}
                  height="auto"
                  alt={person.name}
                />
                <Typography
                  variant="h6"
                  className={classes.personTitle}
                >
                  {person.title}
                  <p>{person.location && person.location.name}</p>
                </Typography>
              </Link>
              <Typography
                variant="h5"
                className={classes.personName}
              >
                {person.name}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
};

export default People;