import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { MusicIcon } from '~/components/Icons';
import styles from './Home.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <div className={cx('DivItemContainer')}>
        <a className={cx('avatar-anchor')} href="/">
          <div className={cx('DivContainer')} style={{ width: '56px', height: '56px' }}>
            <span className={cx('SpanAvatarContainer-StyledAvatar')}>
              <img
                className={cx('Image-wrapper')}
                src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                alt="hoaaa"
              ></img>
            </span>
          </div>
        </a>

        <div className={cx('DivContentContainer')}>
          <div className={cx('DivTextInfoContainer')}>
            <div className={cx('DivAuthorContainer')}>
              <a className={cx('StyledAuthorAnchor')} href="/">
                <h3 className={cx('H3AuthorTitle')}>nghien.setups</h3>
                <h4 className={cx('H4AuthorName')}>Nghien.Seyups</h4>
              </a>
            </div>

            <Button
              className={cx('Button-StyledFollowButton')}
              outline={true}
              small={true}
            >
              Follow
            </Button>

            <div className={cx('DivTextContainer')}>
              <span className={cx('SpanText')}>
                Một chiếc cốc không bao giờ đổ mà bất kỳ ai cũng nên có.
              </span>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#nghiensetup</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#gdlfamily</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#setupgoclamviec</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#desksetup</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#decor</strong>
              </a>
            </div>

            <h4 className={cx('H4Link')}>
              <a href="/">
                <MusicIcon className={cx('SvgIcon')} width="1em" height="1em" />
                FEEL THE GROOVE - Queens Road, Fabian Graetz
              </a>
            </h4>
          </div>

          <div className={cx('DivVideoWrapper')}>
            <div className={cx('DivVideoCardContainer')}>
              <canvas
                className={cx('CanvasVideoCardPlaceholder')}
                width="56.25"
                height="100"
              ></canvas>
              <div className={cx('DivVideoPlayerContainer')}>
                <div className={cx('DivVideoContainer')}>
                  <div className={cx('DivBasicPlayerWrapper')}>
                    <video
                      src="https://v16-webapp.tiktok.com/874dd0b832ee8e0a29e1098d979b46e4/62b42cf9/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/1cb7eee1e2ae47e283ce5c01caf67412/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=2492&amp;bt=1246&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6Hk_Myq8ZMtWZwe2NAuQml7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZTQ5ZWU2ZzNmOGU6MzxnaUBpanNpdGY6Zm85ZDMzZjgzM0BgXzQwNjJfNTMxNl9fMjIxYSNuaDA1cjRvLWxgLS1kL2Nzcw%3D%3D&amp;l=202206230305170102510651021F01D6A2"
                      playsinline=""
                      autoplay="false"
                      controls
                      className={cx('VideoBasic')}
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cx('DIvActionItemContainer')}
              style={{ width: '120px', height: '237px' }}
            ></div>
          </div>
        </div>
      </div>

      <div className={cx('DivItemContainer')}>
        <a className={cx('avatar-anchor')} href="/">
          <div className={cx('DivContainer')} style={{ width: '56px', height: '56px' }}>
            <span className={cx('SpanAvatarContainer-StyledAvatar')}>
              <img
                className={cx('Image-wrapper')}
                src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                alt="hoaaa"
              ></img>
            </span>
          </div>
        </a>

        <div className={cx('DivContentContainer')}>
          <div className={cx('DivTextInfoContainer')}>
            <div className={cx('DivAuthorContainer')}>
              <a className={cx('StyledAuthorAnchor')} href="/">
                <h3 className={cx('H3AuthorTitle')}>mixigaming</h3>
                <h4 className={cx('H4AuthorName')}>Độ Phùng</h4>
              </a>
            </div>

            <Button
              className={cx('Button-StyledFollowButton')}
              outline={true}
              small={true}
            >
              Follow
            </Button>

            <div className={cx('DivTextContainer')}>
              <span className={cx('SpanText')}>nhóm nhảy mới nổi :))</span>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#mixigaming</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#refundgaming</strong>
              </a>
            </div>

            <h4 className={cx('H4Link')}>
              <a href="/">
                <MusicIcon className={cx('SvgIcon')} width="1em" height="1em" />
                Chạy Về Khóc Với Anh - Cukak Remix - ERIK & Cukak
              </a>
            </h4>
          </div>

          <div className={cx('DivVideoWrapper')}>
            <div className={cx('DivVideoCardContainer')}>
              <canvas
                className={cx('CanvasVideoCardPlaceholder')}
                width="100"
                height="100"
              ></canvas>
              <div className={cx('DivVideoPlayerContainer')}>
                <div className={cx('DivVideoContainer')}>
                  <div className={cx('DivBasicPlayerWrapper')}>
                    <video
                      src="https://v16-webapp.tiktok.com/65e9d502b4cfc73035c09d3239452e3d/62b48e20/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/7569f87a64bc46f8b9d2e0f7221cd661/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1788&bt=894&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZA_3Uwe2NyfQml7Gb&mime_type=video_mp4&qs=0&rc=aDxpPDNoOmY3NzplOjNmZUBpM2tteDc6ZmR0PDMzZjgzM0AuYy8tXjVeXzUxMDZhYC4tYSNvZ3NfcjRfYWNgLS1kL2Nzcw%3D%3D&l=2022062310001801024504321311005977"
                      playsinline=""
                      autoplay="false"
                      controls
                      className={cx('VideoBasic')}
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cx('DIvActionItemContainer')}
              style={{ width: '120px', height: '237px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
