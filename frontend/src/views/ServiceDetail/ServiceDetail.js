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

const ServiceDetail = ({ data }) => {
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
      isActive: false,
    },
    {
      href: `/services/groups/${data.service.service_group.id}`,
      title: `${data.service.service_group.name}`,
      isActive: false,
    },
    {
      title: data.service.name,
      isActive: true,
    },
  ];

  return (
    <div className={classes.root}>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
      <Section>
        <Detail service={data.service}/>
      </Section>
      <SectionAlternate>
        <pre>
          {JSON.stringify(data.service, null, 4)}
        </pre>
      </SectionAlternate>
    </div>
  );
};

export default ServiceDetail;
