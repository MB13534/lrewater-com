import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {},
  personName: {
    textTransform: 'uppercase',
    textAlign: 'left',
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
  projectImage: {
    opacity: 0.5,
  },
  projectLink: {
    overflow: 'hidden',
    display: 'block',
    position: 'relative',
    borderBottom: '1px solid #c4c4c4',
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
      opacity: 0.5,
    },
    '&:hover': {
      textDecoration: 'none',
      '& .project-image': {
        opacity: 1,
      },
      '& .person-name': {
        color: 'white',
      },
      '& .text-wrap': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  textCell: {
    alignSelf: 'center',
    paddingLeft: theme.spacing(3),
    '&:hover': {

    }
  },
  formGroupLabel: {
    color: '#c4c4c4',
    textTransform: 'uppercase',
  },
  sortLabel: {
    '& .MuiFormControlLabel-label': {
      fontFamily: '\'Montserrat\', sans-serif',
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: 1.7,
    },
  }
}));

const ProjectList = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [selectedPeople, setSelectedPeople] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  const [selectedExpertises, setSelectedExpertises] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(null);
  const [sort, setSort] = React.useState('chronological');

  const [filteredProjects, setFilteredProjects] = useState(data.projects);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  }

  useEffect(() => {
    setFilteredProjects((prevState) => {
      let newState = [...data.projects];

      if (selectedPeople) {
        newState = newState.filter(x => typeof x.people.find(y => y.people_id === selectedPeople.id) !== 'undefined');
      }

      if (selectedServices) {
        newState = newState.filter(x => typeof x.service_groups.find(y => y.service_groups_id === selectedServices.id) !== 'undefined');
      }

      if (selectedExpertises) {
        newState = newState.filter(x => typeof x.expertises.find(y => y.expertise_id === selectedExpertises.id) !== 'undefined');
      }

      if (selectedLocations) {
        newState = newState.filter(x => x.location?.id === selectedLocations.id);
      }

      if (sort === 'alphabetical') {
        newState = newState.sort((a,b)=> (a.name > b.name ? 1 : -1));
      }

      if (sort === 'chronological') {
        newState = newState.sort((a,b)=> (a.project_date > b.project_date ? 1 : -1));
      }

      return newState;
    })
  }, [sort, selectedPeople, selectedServices, selectedExpertises, selectedLocations]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography
        variant="h5"
        className={classes.formGroupLabel}
        gutterBottom
        >
        Filter By:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            id="PeopleFilter"
            options={data.people}
            value={selectedPeople}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) =>
              option.id === value.id
            }
            onChange={(event, value) => setSelectedPeople(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Person"
                placeholder="Select Person"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            id="ServicesFilter"
            options={data.serviceGroups}
            value={selectedServices}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) =>
              option.id === value.id
            }
            onChange={(event, value) => setSelectedServices(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Service"
                placeholder="Select Service"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            id="ExpertisesFilter"
            options={data.expertises}
            value={selectedExpertises}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) =>
              option.id === value.id
            }
            onChange={(event, value) => setSelectedExpertises(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Expertise"
                placeholder="Select Expertise"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            id="LocationsFilter"
            options={data.locations}
            value={selectedLocations}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) =>
              option.id === value.id
            }
            onChange={(event, value) => setSelectedLocations(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Location"
                placeholder="Select Location"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{marginTop: theme.spacing(4)}}>
        <Grid item xs={12} sm={2} style={{alignSelf: 'center'}}>
          <Typography
            variant="h5"
            className={classes.formGroupLabel}
          >
            Sort By:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} style={{alignSelf: 'center'}}>
          <RadioGroup aria-label="sort" name="sort" value={sort} onChange={handleSortChange} row>
            <FormControlLabel value="alphabetical" control={<Radio />} label="Alphabetical" className={classes.sortLabel} />
            <FormControlLabel value="chronological" control={<Radio />} label="Chronological" className={classes.sortLabel} />
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{marginTop: theme.spacing(8)}}>
        {filteredProjects.length === 0 && (
          <Box>
            <Typography
              variant={'body'}
              >
              No results found for the selected criteria.
            </Typography>
          </Box>
        )}
        {filteredProjects.map((project, i) => (
          project.image && (
            <Grid key={i} item xs={12} md={6} style={{paddingRight: '20px'}}>
              <Link href={`/projects/${project.id}`} className={classes.projectLink}>
                <Grid container spacing={0} className={clsx('text-wrap', classes.textWrap)}>
                  <Grid item xs={4}>
                    <Image
                      src={project.image.data.thumbnails.find(x => x.key === 'directus-medium-crop').url}
                      width={'100%'}
                      height="auto"
                      alt={project.name}
                      style={{ maxWidth: '170px' }}
                      lazy={false}
                      className={clsx('project-image', classes.projectImage)}
                    />
                  </Grid>
                  <Grid item xs={8} className={clsx('text-wrap', classes.textCell)}>
                    <Typography
                      variant="h5"
                      className={clsx('person-name', classes.personName)}
                    >
                      {project.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          )
        ))}
      </Grid>
    </div>
  );
};

export default ProjectList;