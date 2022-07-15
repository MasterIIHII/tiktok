import classNames from 'classnames/bind';
import { LockIcon, NotiIcon, PeopleIcon, RightIcon } from '~/components/Icons';
import styles from './Setting.module.scss';
import React, { useState } from 'react';
import Switch from 'react-switch';

const cx = classNames.bind(styles);

function Setting() {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  const [checked2, setChecked2] = useState(false);
  const handleChange2 = (nextChecked) => {
    setChecked2(nextChecked);
  };

  return (
    <div className={cx('row-layout-background')}>
      <div className={cx('row-layout-wrapper')}>
        <div className={cx('row-layout-container')}>
          <div className={cx('row-layout-nav')}>
            <div className={cx('row-nav-scroll')} style={{ top: '76px' }}>
              <div className={cx('row-layout-nav-item')}>
                <PeopleIcon className={cx('row-layout-nav-icon')} />
                <span className={cx('row-layout-nav-text')}>Manage account</span>
              </div>

              <div className={cx('row-layout-nav-item')}>
                <LockIcon className={cx('row-layout-nav-icon')} />
                <span className={cx('row-layout-nav-text')}>Privacy</span>
              </div>

              <div className={cx('row-layout-nav-item')}>
                <NotiIcon className={cx('row-layout-nav-icon')} />
                <span className={cx('row-layout-nav-text')}>Push notifications</span>
              </div>
            </div>
          </div>

          <div className={cx('row-layout-content-container')}>
            <div>
              <div className={cx('row-layout-content')}>
                <div className={cx('manage-account-container')}>
                  <div className={cx('setting-title')}>Manage account</div>
                  <div className={cx('setting-subtitle')}>Account control</div>
                  <div className={cx('setting-option')}>Delete account</div>
                  <div className={cx('manage-account-delete')}>Delete</div>
                </div>
              </div>

              <div className={cx('row-layout-content')}>
                <div className={cx('privacy-container')}>
                  <div className={cx('setting-title')}>Privacy</div>
                  <div className={cx('setting-subrow')}>
                    <div className={cx('setting-subtitle')}>Discoverability</div>
                    <div className={cx('setting-option')} style={{ marginBottom: '3px' }}>
                      Private account
                    </div>
                    <div className={cx('setting-description')}>
                      With a private account, only users you approve can follow you and
                      watch your videos. Your existing followers won't be affected.
                    </div>
                    <div className={cx('privacy-switch-container')}>
                      <Switch
                        onChange={handleChange2}
                        checked={checked2}
                        className={cx('switch-container')}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 0px 0px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
                        onColor="#67dca0"
                        offColor="#e2e3e4"
                        handleDiameter={21}
                        width={43}
                        height={25}
                        borderRadius={22}
                      />
                    </div>
                  </div>
                  <div className={cx('setting-subrow')} style={{ cursor: 'pointer' }}>
                    <div className={cx('setting-subtitle')}>Data</div>
                    <div className={cx('option-container')}>
                      <div className={cx('setting-option')}>Download your data</div>
                      <div className={cx('setting-description')}>
                        <span>Get a copy of your Tiktok data</span>
                      </div>
                      <div className={cx('arrow-icon')}>
                        <RightIcon className={cx('arrow-icon-styled')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx('row-layout-content')}>
                <div className={cx('push-notification-container')}>
                  <div className={cx('setting-title')}>Push notifications</div>
                  <div className={cx('setting-subtitle')}>Desktop notifications</div>
                  <div className={cx('setting-option')}>Allow in browser</div>
                  <div className={cx('setting-description')}>
                    Stay on top of notifications for likes, comments, the latest videos,
                    and more on desktop. You can turn them off anytime.
                  </div>
                  <div className={cx('push-browser-switch')}>
                    <Switch
                      onChange={handleChange}
                      checked={checked}
                      className={cx('switch-container')}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 0px 0px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
                      onColor="#67dca0"
                      offColor="#e2e3e4"
                      handleDiameter={21}
                      width={43}
                      height={25}
                      borderRadius={22}
                    />
                  </div>
                  <div className={cx('web-push-margin')}></div>
                  <div className={cx('setting-subtitle', 'preferences')}>
                    Your preferences
                  </div>
                  <div className={cx('setting-description')}>
                    Your preferences will be synced automatically to the Tiktok app.
                  </div>
                  <div className={cx('preference-setting-container')}>
                    <div className={cx('setting-option')}>Interactions</div>
                    <div className={cx('setting-description')}>
                      Likes, comment, new followers, mentions
                      <span
                        className={cx('push-setting-toggle-triangle-container')}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
