import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    home: {
      title: 'Home',
      id: 'home',
      href: '/',
    },
    resources: {
      title: 'Resources',
      id: 'resources',
      href: '/resources',
    },
    whoweare: {
      title: 'Who We Are',
      id: 'whoweare',
      href: '/who-we-are',
    },
    whatwedo: {
      title: 'What We Do',
      id: 'whatwedo',
      children: [
        {
          title: 'Our Services',
          id: 'services',
          href: '/services',
        },
        {
          title: 'Our Projects',
          id: 'projects',
          href: '/projects',
        },
      ],
    },
    careers: {
      title: 'Careers',
      id: 'careers',
      href: '/careers',
    },
    contact: {
      title: 'Contact',
      id: 'contact',
      href: '/contact',
    },
    // pages: {
    //   title: 'Pages',
    //   id: 'pages',
    //   children: {
    //     about: {
    //       groupTitle: 'About',
    //       pages: [
    //         {
    //           title: 'About Us',
    //           href: '/about-us',
    //         },
    //         {
    //           title: 'Mission',
    //           href: '/mission',
    //         },
    //       ],
    //     },
    //   },
    // },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>{children}</main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
