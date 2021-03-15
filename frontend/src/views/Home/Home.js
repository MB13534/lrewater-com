import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Hero, Services, CTA } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  heroWrap: {
    backgroundColor: theme.palette.brand.dark,
  },
}));

const Home = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heroWrap}>
        <Section disablePadding>
          <Hero data={data.pageData.hero_banner} />
        </Section>
      </div>
      <Section>
        <CTA data={data.pageData}/>
      </Section>
      <SectionAlternate>
        <Services data={data} />
      </SectionAlternate>
    </div>
  );
};

export default Home;
