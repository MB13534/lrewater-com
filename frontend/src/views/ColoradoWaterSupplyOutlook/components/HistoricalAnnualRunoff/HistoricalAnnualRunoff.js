import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing(2, 8),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 2),
    },
  },
  form: {
    width: '100%',
    paddingRight: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(4),
    },
  },
  body: {
    '& table': {
      width: '100%',
      textAlign: 'center',
    },
    '& th': {
      fontSize: '20px',
      paddingBottom: theme.spacing(2),
      color: theme.palette.brand.primary,
    },
    '& thead tr': {
      borderBottom: '2px solid gray',
    },

    '& tbody tr': {
      borderBottom: '1px solid lightGray',

      '&:hover': {
        backgroundColor: '#F5F5F5',
      },
    },
    '& td': {
      fontSize: '18px',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    '& p': {
      marginBottom: theme.spacing(4),
    },
    '& ul': {
      marginBottom: theme.spacing(4),
    },
    '& ul li': {
      marginLeft: theme.spacing(10),
    },
    '& h2': {
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
      fontFamily: "'Montserrat'",
      fontWeight: 900,
      fontSize: '26px',
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    '& figcaption': {
      fontSize: '16px',
      textAlign: 'center',
    },
    '& a': {
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

const HistoricalAnnualRunoff = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mb={6}>
        <Typography variant="h4" component="span">
          Click below to download the Historical Annual Colorado River Runoff diagram{' '}
        </Typography>
        <Typography variant="h4" component="span" color="primary">
          <a
            href={`${process.env.DIRECTUS_ENDPOINT}/assets/j53ph9hz75csw848?download`}
            target="_blank"
            rel="noreferrer noopener"
          >
            PDF
          </a>
        </Typography>
        <Box ml={8} mt={2}>
          <Button
            variant={'outlined'}
            size={'large'}
            color={'primary'}
            href={`${process.env.DIRECTUS_ENDPOINT}/assets/j53ph9hz75csw848?download`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Historical Annual Runoff PDF
          </Button>
        </Box>
      </Box>

      <div className={classes.body} dangerouslySetInnerHTML={{ __html: data.description }} />

      <Grid item xs={12}>
        {data.graphs.map(graph => (
          <div
            key={graph.division}
            style={{ marginBottom: theme.spacing(6) }}
            dangerouslySetInnerHTML={{ __html: graph.embed_code }}
          />
        ))}
      </Grid>

      <div className={classes.body} dangerouslySetInnerHTML={{ __html: data.recap }} />
    </div>
  );
};

HistoricalAnnualRunoff.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default HistoricalAnnualRunoff;
