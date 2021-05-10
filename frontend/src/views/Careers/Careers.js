import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Breadcrumb from '../../common/Breadcrumb';
import Benefits from './components/Benefits';
import Quote from './components/Quote';
import PageHero from '../../common/PageHero';
import Locations from './components/Locations';

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

const Careers = ({ data }) => {
  const classes = useStyles();

  const breadcrumb = [
    {
      href: '/',
      title: 'Home',
      isActive: false,
    },
    {
      href: '/careers',
      title: 'Careers',
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      {/*<SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>*/}
      <Section disablePadding fullWidth>
        <PageHero data={data.pageData} className={classes.pageHero} />
      </Section>
      <Section>
        <Benefits data={data} />
      </Section>
      <Section dark disablePadding fullWidth>
        <Locations data={data} />
      </Section>
      <Section>
        <Quote data={data} />
      </Section>
    </div>
  );
};

export default Careers;
