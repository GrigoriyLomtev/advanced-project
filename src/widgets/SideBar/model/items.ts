import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SideBarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'navBar.toMainPage',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'navBar.toAboutPage',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'navBar.toProfilePage',
    authOnly: true,
  },
];
