import classNames from 'classnames/bind';
import { EditIcon, ForwardIcon2, LockedIcon, ProfileIcon } from '~/components/Icons';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx('DivShareLayout')}>
      <div className={cx('DivShareLayoutContent')}>
        <div className={cx('DivShareLayoutHeader-StyledDivShareLayoutHeader')}>
          <div className={cx('DivShareInfo')}>
            <div
              className={cx('DivContainer')}
              style={{ width: '116px', height: '116px' }}
            >
              <span
                className={cx('SpanAvatarContainer-StyledAvatar')}
                style={{ width: '116px', height: '116px' }}
              >
                <img
                  alt=""
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6892679753195585542.jpeg?x-expires=1656745200&x-signature=6aNxEU6ek5UXAAL2LWpsKzuJLis%3D"
                ></img>
              </span>
            </div>

            <div className={cx('DivShareTitleContainer')}>
              <h2 className={cx('H2ShareTitle')}>Master IHI</h2>
              <h1 className={cx('H1ShareSubTitle')}>S Hieu</h1>
              <div className={cx('DivEditContainer')}>
                <button className={cx('Button-StyledEditButton')}>
                  <EditIcon className={cx('EditIcon')} />
                  <span>Edit profile</span>
                </button>
              </div>
            </div>
          </div>

          <h2 className={cx('H2CountInfos')}>
            <div className={cx('DivNumber')}>
              <strong title="Following">88</strong>
              <span className={cx('SpanUnit')}>Following</span>
            </div>
            <div className={cx('DivNumber')}>
              <strong title="Followers">888</strong>
              <span className={cx('SpanUnit')}>Followers</span>
            </div>
            <div className={cx('DivNumber')}>
              <strong title="Likes">0</strong>
              <span className={cx('SpanUnit')}>Likes</span>
            </div>
          </h2>

          <h2 className={cx('H2ShareDesc')}>No bio yet.</h2>

          <div className={cx('DivShareActions')}>
            <ForwardIcon2 />
          </div>
        </div>

        <div className={cx('DivShareLayoutMain')}>
          <div className={cx('DivVideoFeedTab-StyledDivVideoFeedTab')}>
            <p className={cx('PPost')}>
              <span>Videos</span>
            </p>

            <p className={cx('PLike')}>
              <LockedIcon className={cx('LockedIcon')} />
              <span className={cx('SpanLiked')}>Liked</span>
            </p>

            <div className={cx('DivBottomLine')}></div>
          </div>

          <main className={cx('MainDetailWrapper')}>
            <div className={cx('DivErrorContainer')}>
              <ProfileIcon className={cx('ProfileIcon')} />
              <p className={cx('PTitle')}>Upload your first video</p>
              <p className={cx('PDesc')}>Your videos will appear here</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
