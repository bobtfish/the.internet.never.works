/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from "@remix-run/react";
import { Box } from '@mantine/core';
import { CVIcon } from '~/components'

import classes from './Navbar.module.css';

const menu = [
    { link: '/cv', label: 'CV', icon: CVIcon },
    /*{ link: '', label: 'Billing', icon: IconReceipt2 },
    { link: '', label: 'Security', icon: IconFingerprint },
    { link: '', label: 'SSH Keys', icon: IconKey },
    { link: '', label: 'Databases', icon: IconDatabaseImport },
    { link: '', label: 'Authentication', icon: Icon2fa },
    { link: '', label: 'Other Settings', icon: IconSettings },*/
  ];
  
export function Navbar() {
  const [active, setActive] = useState('');

  const links = menu.map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(_event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={"1.5"} />
      <Box component="span">{item.label}</Box>
    </NavLink>
  ));

  return (
    <Box className={classes.navbar}>
      {links}
    </Box>
  );
}
