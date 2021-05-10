import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Breadcrumb from '../../common/Breadcrumb';
import Mission from './components/Mission';
import PageHero from '../../common/PageHero';
import Values from './components/Values';
import People from './components/People';
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

const WhoWeAre = ({ data }) => {
  const classes = useStyles();

  const breadcrumb = [
    {
      href: '/',
      title: 'Home',
      isActive: false,
    },
    {
      href: '/who-we-are',
      title: 'Who We Are',
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      {/*<SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>*/}
      <Section disablePadding style={{display: 'inline'}}>
        <PageHero data={data.pageData} className={classes.pageHero} />
        <a name="our-mission" style={{
          display: 'block',
          position: 'relative',
          top: '-100px',
          visibility: 'hidden',
        }}/>
      </Section>
      <Section>
        <Mission data={data} />
        <a name="our-values"/>
      </Section>

      <SectionAlternate>
        <Values data={data} />
        <a name="our-people"/>
      </SectionAlternate>

      <Section>
        <People data={data} />
        <a name="our-locations"/>
      </Section>

      <SectionAlternate dark>
        <Locations data={data} />
      </SectionAlternate>
    </div>
  );
};

export default WhoWeAre;
