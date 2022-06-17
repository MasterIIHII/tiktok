import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
  HomeIcon,
  HomeActiveIcon,
  FollowingIcon,
  FollowingActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('menu')}>
        <Menu>
          <MenuItem
            title="For You"
            to={config.routes.home}
            icon={<HomeIcon />}
            activeIcon={<HomeActiveIcon />}
          />
          <MenuItem
            title="Following"
            to={config.routes.following}
            icon={<FollowingIcon />}
            activeIcon={<FollowingActiveIcon />}
          />
          <MenuItem
            title="LIVE"
            to={config.routes.live}
            icon={<LiveIcon />}
            activeIcon={<LiveActiveIcon />}
          />
        </Menu>            
      </div>
      <div className={cx('container')}>      
        <div className={cx('userLinkContainer')}>                  
          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('user-avatar_style')} style={{width: "32px", height: "32px", marginRight: "12px"}}>
                  
            </div>
            <span>Nguyen Van A</span>
          </a>
          <a href='/'>

          </a>
        </div>
        <div className={cx('userLinkContainer')}>Nguyen Van B</div>
        <div className={cx('userLinkContainer')}>Nguyen Van C</div>
        <div className={cx('userLinkContainer')}>Nguyen Van D</div>
      </div>
    </aside>    
  );
}

export default Sidebar;
