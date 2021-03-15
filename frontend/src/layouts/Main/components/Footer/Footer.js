import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
    backgroundImage: 'url(/images/footer-bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    backgroundSize: '50%'
  },
  footerContainer: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 550 / 4.6,
    height: 240 / 4.6,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
  slogan: {
    color: 'white',
    textTransform: 'uppercase',
    marginLeft: -40,
  },
  legal: {
    color: 'white',
    marginLeft: theme.spacing(2),
  }
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="LRE Water">
                    <Image
                      className={classes.logoImage}
                      src="/images/logos/lre-logo-footer.svg"
                      alt="LRE Water"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item className={classes.listItem}>
                <div className={classes.menu}>
                  <div>
                    <List disablePadding className={classes.menuItem}>
                      <ListItem disableGutters className={classes.menuGroupItem}>
                        <Typography variant="body1" className={classes.menuGroupTitle}>
                          Pages
                        </Typography>
                      </ListItem>
                      {Object.keys(pages).map((page, i) => (
                        <div key={i}>
                          {pages[page].children &&
                          pages[page].children.map((child, i) => (
                            <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                              <Typography
                                variant="body1"
                                component={'a'}
                                href={child.href}
                                className={clsx(classes.navLink, 'submenu-item')}
                              >
                                {child.title}
                              </Typography>
                            </ListItem>
                          ))}
                          {!pages[page].children && (
                            <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                              <Typography
                                variant="body1"
                                component={'a'}
                                href={pages[page].href}
                                className={clsx(classes.navLink, 'submenu-item')}
                              >
                                {pages[page].title}
                              </Typography>
                            </ListItem>
                          )}
                        </div>
                      ))}
                    </List>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Typography
              variant={'caption'}
              className={classes.legal}
            >
              &copy; 2015-{new Date().getFullYear()}. Leonard Rice Engineers, Inc.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant={'h1'}
              className={classes.slogan}
              >Connecting Water to Life</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
