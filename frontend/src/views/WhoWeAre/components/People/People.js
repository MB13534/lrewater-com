import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import PeopleModal from './PeopleModal';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {},
  formGroupLabel: {
    color: '#c4c4c4',
    textTransform: 'uppercase',
  },
  sortLabel: {
    '& .MuiFormControlLabel-label': {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: 1.7,
    },
  },
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
    },
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
    '&:hover': {},
  },
}));

const People = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [selectedPeopleType, setSelectedPeopleType] = useState(null);

  const [filteredPeople, setFilteredPeople] = useState(data.people);

  useEffect(() => {
    setFilteredPeople(() => {
      let newState = [...data.people];

      if (selectedPeopleType) {
        newState = newState.filter(x => x.people_types.find(y => y.people_types_id === selectedPeopleType.id));
      }

      return newState;
    });
  }, [selectedPeopleType]);

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
            marginBottom: theme.spacing(4),
          },
        }}
      />
      <Typography variant="h5" className={classes.formGroupLabel} gutterBottom>
        Filter By:
      </Typography>
      <Grid item xs={12} sm={6} md={3}>
        <Autocomplete
          id="PeopleFilter"
          options={data.peopleTypes}
          value={selectedPeopleType}
          getOptionLabel={option => option.name}
          getOptionSelected={(option, value) => option.id === value.id}
          onChange={(event, value) => setSelectedPeopleType(value)}
          renderInput={params => (
            <TextField
              {...params}
              variant="filled"
              label="Service Teams"
              placeholder="Select Service Team"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      </Grid>
      <Grid container spacing={8} style={{ marginTop: theme.spacing(4) }}>
        {data.people.map((person, i) => {
          const [open, setOpen] = useState(false);

          function handleClose() {
            setOpen(false);
          }

          return (
            <Grid key={i} item xs={12} sm={6} md={3} style={{ display: filteredPeople.includes(person) ? 'block' : 'none' }}>
              <PeopleModal person={person} open={open} setOpen={setOpen} onClose={handleClose} />
              <Link
                href={`#`}
                className={classes.personImage}
                onClick={e => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <Image
                  src={person.image.data.thumbnails.find(x => x.key === 'directus-medium-crop').url}
                  width={'100%'}
                  height="auto"
                  alt={person.name}
                />
                <Typography variant="h6" className={classes.personTitle}>
                  {person.title}
                  <p>{person.location && person.location.name}</p>
                </Typography>
              </Link>
              <Typography variant="h5" className={classes.personName}>
                {person.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default People;
