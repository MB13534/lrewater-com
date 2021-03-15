import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  colors,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    minHeight: '120px',
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.main,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.main,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    fontWeight: 900,
    textTransform: 'uppercase',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 550 / 5,
    height: 240 / 5,
    [theme.breakpoints.up('md')]: {
      width: 550 / 4,
      height: 240 / 4,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = (props) => {
  const { className, onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  return (
    <AppBar
      {...rest}
      position="relative"
      className={clsx(classes.root, className)}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <a href="/" title="LRE Water">
            <Image
              className={classes.logoImage}
              src="/images/logos/lre-logo.svg"
              alt="LRE Water"
              lazy={false}
            />
          </a>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List className={classes.navigationContainer}>
            {Object.keys(pages).map((page, i) => (
              <div key={pages[page].id}>
                {pages[page].children && (
                  <>
                    <ListItem
                      aria-describedby={pages[page].id}
                      onClick={e => handleClick(e, pages[page].id)}
                      className={clsx(
                        classes.listItem,
                        openedPopoverId === pages[page].id ? classes.listItemActive : '',
                      )}
                    >
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        className={clsx(classes.listItemText, 'menu-item')}
                      >
                        {pages[page].title}
                      </Typography>
                      <ListItemIcon className={classes.listItemIcon}>
                        <ExpandMoreIcon
                          className={
                            openedPopoverId === pages[page].id ? classes.expandOpen : ''
                          }
                          fontSize="small"
                        />
                      </ListItemIcon>
                    </ListItem>
                    <Popover
                      elevation={1}
                      id={pages[page].id}
                      open={openedPopoverId === pages[page].id}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      classes={{ paper: classes.popover }}
                    >
                      <div>
                        <div className={classes.menu}>
                          <div className={classes.menuItem}>
                            <List disablePadding>
                              {pages[page].children.map((child, i) => (
                                <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                                  <Typography
                                    variant="body1"
                                    component={'a'}
                                    href={child.href}
                                    className={clsx(classes.navLink, 'submenu-item')}
                                    color="textSecondary"
                                    onClick={handleClose}
                                  >
                                    {child.title}
                                  </Typography>
                                </ListItem>
                              ))}
                            </List>
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </>
                )}
                {!pages[page].children && (
                  <ListItem className={clsx(
                    classes.listItem,
                    //router.pathname === pages[page].href ? classes.listItemActive : '',
                  )}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      className={clsx(classes.listItemText, 'menu-item')}
                      component="a"
                      href={pages[page].href}
                    >
                      {pages[page].title}
                    </Typography>
                  </ListItem>
                )}
              </div>
            ))}
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
