import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import PageHero from '../../common/PageHero';
import Construction from './components/Construction';

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

const ColoradoWaterSupplyOutlook = ({ data }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Section disablePadding fullWidth>
        <PageHero data={data.pageData} className={classes.pageHero} />
      </Section>
      <Section>
        <Construction data={data.pageData} />
      </Section>
    </div>
  );
};

export default ColoradoWaterSupplyOutlook;
