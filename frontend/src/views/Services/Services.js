import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Breadcrumb from '../../common/Breadcrumb';
import ServiceGroups from './components/ServiceGroups';
import { Hero } from '../Home/components';
import PageHero from '../../common/PageHero';

const useStyles = makeStyles(theme => ({
  root: {},
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const Services = ({ data }) => {
  const classes = useStyles();

  const breadcrumb = [
    {
      href: '/',
      title: 'Home',
      isActive: false,
    },
    {
      href: '/services',
      title: 'Services',
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      {/*<SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>*/}
      <Section disablePadding fullWidth>
        <PageHero data={data.pageData} />
      </Section>
      <Section>
        <ServiceGroups data={data} />
      </Section>      
    </div>
  );
};

export default Services;
