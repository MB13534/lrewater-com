import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Detail from './components/Detail';
import Breadcrumb from '../../common/Breadcrumb';
import PageHero from '../../common/PageHero';
import Quote from '../Careers/components/Quote';

const useStyles = makeStyles(theme => ({
  root: {},
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const CareerDetail = ({ data }) => {
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
      isActive: false,
    },
    {
      title: data.location.name,
      isActive: true,
    },
  ];

  const pageData = {
    banner_image: data.location.image,
    banner_title: data.location.name,
    banner_subtitle: '',
  };

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Section disablePadding fullWidth>
        <PageHero data={pageData} className={classes.pageHero} />
      </Section>
      <Section>
        <Detail positions={data.positions}/>
      </Section>
      <Section>
        <Quote data={data} />
      </Section>
    </div>
  );
};

export default CareerDetail;
