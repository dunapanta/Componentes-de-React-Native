import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 01',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },
  {
    name: 'Animation 02',
    icon: 'airplane-outline',
    component: 'Animation02Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Input',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-outline',
    component: 'PullRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll Screen',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides Screen Screen',
    icon: 'send-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme Screen Screen',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
