// import React from 'react';

// import HomeIcon from '@assets/icons/home.svg';
// import HomeSelectedIcon from '@assets/icons/home-selected.svg';
// import DownloadIcon from '@assets/icons/download.svg';
// import DownloadSelectedIcon from '@assets/icons/download-selected.svg';
// import SearchIcon from '@assets/icons/search.svg';
// import SearchSelectedIcon from '@assets/icons/search-selected.svg';
// import ProfileIcon from '@assets/icons/profile.svg';
// import ProfileSelectedIcon from '@assets/icons/profile-selected.svg';

// export interface TabBarIconProps {
//   screen: string;
//   isSelected: boolean;
// }

// export enum ScreenNames {
//   HOME = 'Home',
//   DOWNLOADS = 'DownloadsScreen',
//   SEARCH = 'SearchScreen',
//   PROFILE = 'ProfileScreen',
// }

// const TabBarIcon: React.FC<TabBarIconProps> = ({
//   screen,
//   isSelected,
// }: TabBarIconProps) => {
//   switch (screen) {
//     case ScreenNames.HOME:
//       return isSelected ? <HomeSelectedIcon /> : <HomeIcon />;
//     case ScreenNames.DOWNLOADS:
//       return isSelected ? <DownloadSelectedIcon /> : <DownloadIcon />;
//     case ScreenNames.SEARCH:
//       return isSelected ? <SearchSelectedIcon /> : <SearchIcon />;
//     case ScreenNames.PROFILE:
//       return isSelected ? <ProfileSelectedIcon /> : <ProfileIcon />;
//     default:
//       return null;
//   }
// };

// export { ScreenNames };
// export default TabBarIcon;
