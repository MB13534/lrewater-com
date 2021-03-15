/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
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
  divider: {
    width: '100%',
  },
}));

const SidebarNav = props => {
  const { pages, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Links
        </Typography>
        <div className={classes.menu}>
          <div className={classes.menuItem}>
            <List disablePadding>
              {Object.keys(pages).map((page, i) => (
                <>
                  {pages[page].children &&
                  pages[page].children.map((child, i) => (
                    <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                      <Typography
                        variant="body2"
                        component={'a'}
                        href={child.href}
                        className={clsx(classes.navLink, 'submenu-item')}
                        color="textPrimary"
                        onClick={onClose}
                      >
                        {child.title}
                      </Typography>
                    </ListItem>
                  ))}
                  {!pages[page].children && (
                    <ListItem disableGutters key={i} className={classes.menuGroupItem}>
                      <Typography
                        variant="body2"
                        component={'a'}
                        href={pages[page].href}
                        className={clsx(classes.navLink, 'submenu-item')}
                        color="textPrimary"
                        onClick={onClose}
                      >
                        {pages[page].title}
                      </Typography>
                    </ListItem>
                  )}
                </>
              ))}
            </List>
          </div>
        </div>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
