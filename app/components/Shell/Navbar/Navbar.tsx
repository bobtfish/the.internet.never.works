/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink } from "@remix-run/react";
import { CVIcon } from '~/components'

/*
import {
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
*/
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
  const [active, setActive] = useState('Billing');

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
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <div className={classes.navbar}>
      {links}
    </div>
  );
}
