import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import config from '~/config';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { InboxIcon, MessageIcon, PlusIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
          type: 'language',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
          type: 'language',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard and shotcuts',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <Image src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 30]} content="Upload video" placement="bottom">
                <div className={cx('upload-wrapper')}>
                  <a className={cx('icon-wrapper', 'selected')} href='/Upload'>
                    <PlusIcon className={cx('plus-icon')}/>
                    <span className={cx('icon-text')}>Upload</span>
                  </a>
                </div>
                
              </Tippy>
              <Tippy delay={[0, 30]} content="Message" placement="bottom">
                <button className={cx('action-btn', 'Message-icon-container')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 30]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>5</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            hideOnClick={false}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              // <FontAwesomeIcon className={cx('user-avatar')} icon={faCircleUser} />
              <Image
                className={cx('user-avatar')}
                src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                alt="hoaaaa"
                fallback={
                  'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1653728400&x-signature=K%2Fjn3%2FvxkdPJh2aejkg8QEKQPMQ%3D'
                }
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
