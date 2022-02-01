import { Link, Typography } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../components/atoms/Image';
import Box from '@material-ui/core/Box';
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    textTransform: 'uppercase',
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
      fontFamily: "'Montserrat'",
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
        textDecoration: 'underline',
      },
    },
  },
  date: {
    fontSize: '14px',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    '& span': {
      color: theme.palette.primary.main,
    },
  },
}));

const Detail = props => {
  const { project, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="h6" className={clsx(classes.date)}>
        {project.project_location && (
          <>
            Project Location <span>{project.project_location}</span>
          </>
        )}
        {project.service_groups && (
          <>
            {project.project_location && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
            Services{' '}
            <span>
              {project.service_groups.map((service, i) => (
                <React.Fragment key={i}>
                  <Link href={`/services#${service.service_groups_id.id}`}>{service.service_groups_id.name}</Link>
                  {i < project.service_groups.length - 1 && ', '}
                </React.Fragment>
              ))}
            </span>
          </>
        )}
      </Typography>
      <Typography variant="h1" color="textPrimary" className={classes.title} gutterBottom>
        {project.name}
      </Typography>
      <Typography variant="h6" className={clsx(classes.date)}>
        {project.people && (
          <>
            People{' '}
            <span>
              {project.people.map((person, i) => (
                <React.Fragment key={i}>
                  <Link href="/who-we-are#our-people">{person.people_id?.name}</Link>
                  {i < project.people.length - 1 && ', '}
                </React.Fragment>
              ))}
            </span>
          </>
        )}
      </Typography>
      <Box pb={2} pt={2}>
        <Image src={project.image?.data.full_url} alt={project.name} />
      </Box>
      <Typography variant="body2" className={classes.body} gutterBottom>
      </Typography>
      <div className={classes.body}  dangerouslySetInnerHTML={{ __html: project.body }} />
      {project.project_date && (
        <Typography variant="caption" gutterBottom>
          Project Date: {moment(project.project_date).format('MMMM D, YYYY')}
        </Typography>
      )}
    </div>
  );
};

export default Detail;
