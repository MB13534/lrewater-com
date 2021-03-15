import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Detail from './components/Detail';
import Breadcrumb from '../../common/Breadcrumb';

const useStyles = makeStyles(theme => ({
  root: {},
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const ProjectDetail = ({ data }) => {
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
      isActive: false,
    },
    {
      title: data.project.name,
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Section>
        <Detail project={data.project}/>
      </Section>
    </div>
  );
};

export default ProjectDetail;
