import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Breadcrumb from '../../common/Breadcrumb';
import PageHero from '../../common/PageHero';
import ProjectList from './components/ProjectList';

const useStyles = makeStyles(theme => ({
  root: {},
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  pageHero: {
    marginBottom: theme.spacing(2)
  }
}));

const Projects = ({ data }) => {
  const classes = useStyles();

  const breadcrumb = [
    {
      href: '/',
      title: 'Home',
      isActive: false,
    },
    {
      href: '/projects',
      title: 'Projects',
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Section disablePadding fullWidth>
        <PageHero data={data.pageData} className={classes.pageHero} />
      </Section>
      <Section>
        <ProjectList data={data} />
      </Section>
      {/*<SectionAlternate>*/}
      {/*  <pre>*/}
      {/*    {JSON.stringify(data.projects, null, 4)}*/}
      {/*  </pre>*/}
      {/*</SectionAlternate>*/}
    </div>
  );
};

export default Projects;
