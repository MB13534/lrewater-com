import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Breadcrumb from '../../common/Breadcrumb';
import Body from './components/Body';
import PageHero from '../../common/PageHero';
import Videos from './components/Videos';
import Gallery from './components/Gallery';

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

const Culture = ({ data }) => {
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
      isActive: false,
    },
    {
      href: '/our-culture',
      title: 'Our Culture',
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Section disablePadding style={{display: 'inline'}}>
        <PageHero data={data.pageData} className={classes.pageHero} />
      </Section>
      <Section>
        <Body data={data} />
      </Section>
      <Section style={{paddingTop: 0}}>
        <Gallery data={data} />
      </Section>
      <Section>
        <Videos data={data} />
      </Section>
      {/*<SectionAlternate>
        <pre>
          {JSON.stringify(data.pageData, null, 4)}
        </pre>
      </SectionAlternate>*/}
    </div>
  );
};

export default Culture;
