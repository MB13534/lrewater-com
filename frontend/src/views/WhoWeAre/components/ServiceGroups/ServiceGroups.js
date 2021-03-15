import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../components/molecules';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import Image from '../../../../components/atoms/Image';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {},
  serviceGroupWrap: {
    marginBottom: theme.spacing(8),
  },
  serviceGroupName: {
    textTransform: 'uppercase',
  },
  serviceName: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0),
  },
  toggleButton: {
    display: 'inline-block',
    cursor: 'pointer',
    width: 50,
    verticalAlign: 'middle',
    color: theme.palette.brand.primary,
  },
  expanded: {
    '& h4': {
      color: theme.palette.brand.primary,
    }
  }
}));

const ServiceGroups = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.services_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(12),
          },
        }}
      />

      {data.serviceGroups.map((serviceGroup, i) => {
        let image = serviceGroup.image.data.thumbnails.find(x => x.key === 'directus-medium-contain');
        return (
          <Grid container spacing={4} className={classes.serviceGroupWrap}>
            <Grid item xs={12} md={3}>
              <Box mt={8}>
              <Image src={image.url} width={'100%'} height="auto" alt={serviceGroup.name} />
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography
                variant="h3"
                className={classes.serviceGroupName}
                gutterBottom
              >
                {serviceGroup.name}
              </Typography>
              <Typography variant="body2" style={{marginBottom: theme.spacing(6)}}>
                <div dangerouslySetInnerHTML={{ __html: serviceGroup.description }} />
              </Typography>

              {serviceGroup.services.map((service, j) => {
                const isExpanded = expanded === `service${i}_${j}`;
                return (
                  <div className={clsx({[classes.expanded]: isExpanded})}>
                    <Typography
                      variant="h4"
                      className={classes.serviceName}
                      onClick={() => handleChange(`service${i}_${j}`)}
                    >
                    <span
                      className={classes.toggleButton}
                    >
                      {isExpanded && (
                        <RemoveIcon fontSize="large" />
                      )}
                      {!isExpanded && (
                        <AddIcon fontSize="large" />
                      )}
                    </span>
                      {service.name}
                    </Typography>
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <Typography variant="body2" style={{
                        marginLeft: 50,
                        marginBottom: theme.spacing(4)
                      }}>
                        <div dangerouslySetInnerHTML={{ __html: service.description }} />
                      </Typography>
                    </Collapse>
                    <Divider />
                  </div>
                )
              })}
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default ServiceGroups;