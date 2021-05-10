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
  let { siteSettings, children } = props;

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
    whoweare: {
      title: 'Who We Are',
      id: 'whoweare',
      children: [
        {
          title: 'Our Mission',
          id: 'our-mission',
          href: '/who-we-are#our-mission',
        },
        {
          title: 'Our Values',
          id: 'our-values',
          href: '/who-we-are#our-values',
        },
        {
          title: 'Our People',
          id: 'our-people',
          href: '/who-we-are#our-people',
        },
        {
          title: 'Our Locations',
          id: 'our-locations',
          href: '/who-we-are#our-locations',
        },
      ],
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
    resources: {
      title: 'Resources',
      id: 'resources',
      href: '/resources',
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

  if (!siteSettings) {
    siteSettings = {
      youtube_url: '',
      twitter_url: '',
      linkedin_url: '',
      tagline: 'Connecting Water to Life',
      legal: '© 2015-2021. Leonard Rice Engineers, Inc.'
    }
  }
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
      <main style={{marginTop:'120px'}}>{children}</main>
      <Footer siteSettings={siteSettings} pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
