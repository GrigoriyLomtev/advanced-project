import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SideBarItemType } from '../types/sidebar';

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sideBarItemsList: SideBarItemType[] = [
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
    ];

    if (userData) {
      sideBarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'navBar.toProfilePage',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'navBar.toArticlesPage',
          authOnly: true,
        },
      );
    }

    return sideBarItemsList;
  },
);
