import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResourceCard from '../ResourceCard';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0, 8, 0),
  },
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
}));

const ResourceList = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [selectedPeople, setSelectedPeople] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  const [selectedExpertises, setSelectedExpertises] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState(null);
  const [sort, setSort] = React.useState('chronological');

  const [filteredResources, setFilteredResources] = useState(data.resources);

  const handleSortChange = event => {
    setSort(event.target.value);
  };

  useEffect(() => {
    setFilteredResources(() => {
      let newState = [...data.resources];

      if (selectedPeople) {
        newState = newState.filter(x => x.people.find(y => y.people_id?.id === selectedPeople.id));
      }

      if (selectedServices) {
        newState = newState.filter(x => x.service_groups.find(y => y.service_groups_id?.id === selectedServices.id));
      }

      if (selectedExpertises) {
        newState = newState.filter(x => x.expertises.find(y => y.expertises_id.id === selectedExpertises.id));
      }

      if (selectedProjects) {
        newState = newState.filter(x => x.projects.find(y => y.projects_id?.id === selectedProjects.id));
      }

      if (sort === 'alphabetical') {
        newState = newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      }

      if (sort === 'chronological') {
        newState = newState.sort((a, b) => (a.date_posted > b.date_posted ? -1 : 1));
      }

      return newState;
    });
  }, [sort, selectedPeople, selectedServices, selectedExpertises, selectedProjects]);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="h5" className={classes.formGroupLabel} gutterBottom>
        Filter By:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            id="PeopleFilter"
            options={data.people}
            value={selectedPeople}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) => option.id === value.id}
            onChange={(event, value) => setSelectedPeople(value)}
            renderInput={params => (
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
            getOptionSelected={(option, value) => option.id === value.id}
            onChange={(event, value) => setSelectedServices(value)}
            renderInput={params => (
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
            getOptionSelected={(option, value) => option.id === value.id}
            onChange={(event, value) => setSelectedExpertises(value)}
            renderInput={params => (
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
            id="ProjectsFilter"
            options={data.projects}
            value={selectedProjects}
            getOptionLabel={option => option.name}
            getOptionSelected={(option, value) => option.id === value.id}
            onChange={(event, value) => setSelectedProjects(value)}
            renderInput={params => (
              <TextField
                {...params}
                variant="filled"
                label="Projects"
                placeholder="Select Project"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: theme.spacing(4) }}>
        <Grid item xs={12} sm={2} style={{ alignSelf: 'center' }}>
          <Typography variant="h5" className={classes.formGroupLabel}>
            Sort By:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} style={{ alignSelf: 'center' }}>
          <RadioGroup aria-label="sort" name="sort" value={sort} onChange={handleSortChange} row>
            <FormControlLabel
              value="alphabetical"
              control={<Radio />}
              label="Alphabetical"
              className={classes.sortLabel}
            />
            <FormControlLabel
              value="chronological"
              control={<Radio />}
              label="Chronological"
              className={classes.sortLabel}
            />
          </RadioGroup>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{ marginTop: theme.spacing(8) }}>
        {filteredResources.length === 0 && (
          <Box>
            <Typography variant={'body'}>No results found for the selected criteria.</Typography>
          </Box>
        )}
        {filteredResources.map(resource => (
          <Grid key={resource.name} item xs={12} sm={6} md={4}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ResourceList.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ResourceList;
