//Layouts
import { HeaderOnlyLayout } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Feedback from '~/pages/Feedback';
import GetCoin from '~/pages/GetCoin';
import Setting from '~/pages/Setting';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.coin,
    component: GetCoin,
    layout: HeaderOnlyLayout,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnlyLayout,
  },
  {
    path: config.routes.setting,
    component: Setting,
    layout: HeaderOnlyLayout,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.feedback,
    component: Feedback,
    layout: HeaderOnlyLayout,
  }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
