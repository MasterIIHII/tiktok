import classNames from 'classnames/bind';
import { DownIcon2, RightIcon } from '~/components/Icons';
import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);

function Feedback() {
  return (
    <div className={cx('global_container')}>
      <div className={cx('base_layout_container')}>
        <div className={cx('base_layout_content')}>
          <div className={cx('base_layout_main')}>
            <div className={cx('feedback-header')}>
              <h1 className={cx('title')}>Feedback and help</h1>

              <div className={cx('breadcrumb-container')}>
                <span className={cx('sub-title')}>SELECT A TOPIC</span>
              </div>
            </div>

            <div className={cx('feedback-main-container')}>
              <div className={cx('side-container')}>
                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Suggestion</h3>
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>My Account & Settings</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Feed/Search/Share/Embed</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Video and Sound</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Follow/Like/Comment</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Notifications/messages</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Live</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Abuse Report</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Tiktok Balance</h3>
                  <RightIcon className={cx('icon-expand')} />
                </div>

                <div className={cx('option-container')}>
                  <h3 className={cx('text')}>Not Responding/Lagging/Other</h3>
                </div>
              </div>

              <div className={cx('detail-board')}>
                <h3 className={cx('main-title')}>FREQUENTLY ASKED QUESTIONS</h3>

                <div className={cx('detail-container')}>
                  <div className={cx('option-container')}>
                    <h3 className={cx('text')}>How to log in</h3>
                    <DownIcon2 className={cx('icon-expand')} />
                  </div>

                  <div className={cx('content-container')}></div>
                </div>

                <div className={cx('detail-container')}>
                  <div className={cx('option-container')}>
                    <h3 className={cx('text')}>How to delete posted videos</h3>
                    <DownIcon2 className={cx('icon-expand')} />
                  </div>

                  <div className={cx('content-container')}></div>
                </div>

                <div className={cx('detail-container')}>
                  <div className={cx('option-container')}>
                    <h3 className={cx('text')}>Can't log in with Instagram</h3>
                    <DownIcon2 className={cx('icon-expand')} />
                  </div>

                  <div className={cx('content-container')}></div>
                </div>

                <div className={cx('detail-container')}>
                  <div className={cx('option-container')}>
                    <h3 className={cx('text')}>
                      This phone number is already registered
                    </h3>
                    <DownIcon2 className={cx('icon-expand')} />
                  </div>

                  <div className={cx('content-container')}></div>
                </div>
              </div>
            </div>

            <div className={cx('feedback-history')}>
              <a className={cx('text')} href="/feedback/report">
                Feedback History
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
