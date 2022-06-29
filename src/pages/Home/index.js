import classNames from 'classnames/bind';
import Button from '~/components/Button';
import {
  CommentIcon,
  ForwardIcon,
  HeartIcon,
  MusicIcon,
  MuteIcon,
  PlayIcon,
  ReportIcon,
  VoiceIcon,
} from '~/components/Icons';
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
                src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
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
              <div className={cx('DivVideoPlayerContainer', 'group')}>
                <div className={cx('DivVideoContainer')}>
                  <div className={cx('DivBasicPlayerWrapper')}>
                    <video
                      src="https://v16-webapp.tiktok.com/874dd0b832ee8e0a29e1098d979b46e4/62b42cf9/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/1cb7eee1e2ae47e283ce5c01caf67412/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=2492&amp;bt=1246&amp;btag=80000&amp;cs=0&amp;ds=3&amp;ft=eXd.6Hk_Myq8ZMtWZwe2NAuQml7Gb&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZTQ5ZWU2ZzNmOGU6MzxnaUBpanNpdGY6Zm85ZDMzZjgzM0BgXzQwNjJfNTMxNl9fMjIxYSNuaDA1cjRvLWxgLS1kL2Nzcw%3D%3D&amp;l=202206230305170102510651021F01D6A2"
                      playsInline=""
                      autoPlay={false}
                      // controls
                      className={cx('VideoBasic')}
                    ></video>
                  </div>
                </div>

                <div className={cx('DivPlayIconContainer')}>
                  <PlayIcon className={cx('playIcon')} />
                </div>

                <div className={cx('DivVoiceControlContainer')}>
                  <div className={cx('DivMuteIconContainer')}>
                    <VoiceIcon className={cx('muteIcon')} />
                    <MuteIcon className={cx('muteIcon')} />
                  </div>
                </div>

                <div className={cx('DivVideoControlBottom')}></div>

                <div className={cx('PReportText')}>
                  <ReportIcon className={cx('reportIcon')} />
                  <span>Báo cáo</span>
                </div>
              </div>
            </div>

            <div
              className={cx('DIvActionItemContainer')}
              style={{ width: '120px', height: '237px' }}
            >
              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <HeartIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>8888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <CommentIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                  <span className={cx('SpanIconWrapper')}>
                    <ForwardIcon className={cx('actionIcon')} />
                  </span>
                  <strong className={cx('StrongActionText')}>88</strong>
                </button>
              
            </div>
          </div>
        </div>
      </div>

      <div className={cx('DivItemContainer')}>
        <a className={cx('avatar-anchor')} href="/">
          <div className={cx('DivContainer')} style={{ width: '56px', height: '56px' }}>
            <span className={cx('SpanAvatarContainer-StyledAvatar')}>
              <img
                className={cx('Image-wrapper')}
                src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                alt="hoaaa"
              ></img>
            </span>
          </div>
        </a>

        <div className={cx('DivContentContainer')}>
          <div className={cx('DivTextInfoContainer')}>
            <div className={cx('DivAuthorContainer')}>
              <a className={cx('StyledAuthorAnchor')} href="/">
                <h3 className={cx('H3AuthorTitle')}>top_funny_1</h3>
                <h4 className={cx('H4AuthorName')}>TOP_Hài Vui Nhộn</h4>
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
              <span className={cx('SpanText')}>Chó mèo hài hước vui nhộn 😂.</span>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#giaitri</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#vuinhon</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#haicuoi</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#haihuoc</strong>
              </a>
            </div>

            <h4 className={cx('H4Link')}>
              <a href="/">
                <MusicIcon className={cx('SvgIcon')} width="1em" height="1em" />
                Nhạc nền - TOP_Hài Vui Nhộn
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
                      src="https://v16-webapp.tiktok.com/b6c64a8992399ca432b8d24604c93d71/62b579f8/video/tos/maliva/tos-maliva-ve-0068c799-us/18903d57a5854f21b9d3e3303d93c964/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1458&bt=729&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZGG1Uwe2NMwx2l7Gb&mime_type=video_mp4&qs=0&rc=NTdlNzs6ZDs6Zjc7N2dnZkBpanJvbTY6ZjRpZDMzZzczNEAtYjYxLmI0NmExYDFhMmEyYSM0NGtncjRnaG5gLS1kMS9zcw%3D%3D&l=20220624024630010251058228006AB8E7"
                      playsInline=""
                      autoPlay={false}
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
            >
              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <HeartIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>8888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <CommentIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <ForwardIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>88</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('DivItemContainer')}>
        <a className={cx('avatar-anchor')} href="/">
          <div className={cx('DivContainer')} style={{ width: '56px', height: '56px' }}>
            <span className={cx('SpanAvatarContainer-StyledAvatar')}>
              <img
                className={cx('Image-wrapper')}
                src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                alt="hoaaa"
              ></img>
            </span>
          </div>
        </a>

        <div className={cx('DivContentContainer')}>
          <div className={cx('DivTextInfoContainer')}>
            <div className={cx('DivAuthorContainer')}>
              <a className={cx('StyledAuthorAnchor')} href="/">
                <h3 className={cx('H3AuthorTitle')}>ducminhts</h3>
                <h4 className={cx('H4AuthorName')}>Đức Minh</h4>
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
              <span className={cx('SpanText')}>Chị Bầu bị mắng vốn 😂😂.</span>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#xadoanmeo</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#chibau8m</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#catsky</strong>
              </a>
            </div>

            <h4 className={cx('H4Link')}>
              <a href="/">
                <MusicIcon className={cx('SvgIcon')} width="1em" height="1em" />
                Nhạc nền - Đức Minh
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
                      src="https://v16-webapp.tiktok.com/ccc6afb443be6ad370c3baaf5911ed78/62b579f8/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/f27822b4a26a49fca81e298b81209896/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4038&bt=2019&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZGG1Uwe2NMwx2l7Gb&mime_type=video_mp4&qs=0&rc=OzQ4aTdpNmhkMztkZDlkPEBpanN1cGU6Zjc6ZDMzZjczM0BjLV5iLjAuXzUxYC8yYy1eYSM0X2xlcjRvNW5gLS1kMWNzcw%3D%3D&l=20220624024630010251058228006AB8E7"
                      playsInline=""
                      autoPlay={false}
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
            >
              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <HeartIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>8888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <CommentIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <ForwardIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>88</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('DivItemContainer')}>
        <a className={cx('avatar-anchor')} href="/">
          <div className={cx('DivContainer')} style={{ width: '56px', height: '56px' }}>
            <span className={cx('SpanAvatarContainer-StyledAvatar')}>
              <img
                className={cx('Image-wrapper')}
                src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                alt="hoaaa"
              ></img>
            </span>
          </div>
        </a>

        <div className={cx('DivContentContainer')}>
          <div className={cx('DivTextInfoContainer')}>
            <div className={cx('DivAuthorContainer')}>
              <a className={cx('StyledAuthorAnchor')} href="/">
                <h3 className={cx('H3AuthorTitle')}>nhi_alaska2013</h3>
                <h4 className={cx('H4AuthorName')}>Nhí Alaska Video</h4>
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
              <span className={cx('SpanText')}>Chút niềm vui từ việc nuôi Ngáo 😆</span>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#xuhuong</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#pet</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#husky</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#alaska</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#dogs</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#cunyeu</strong>
              </a>

              <a className={cx('StyledCommonLink')} href="/">
                <strong className={cx('StrongText')}>#thú cưng</strong>
              </a>
            </div>

            <h4 className={cx('H4Link')}>
              <a href="/">
                <MusicIcon className={cx('SvgIcon')} width="1em" height="1em" />
                Nhạc nền - Nhí Alaska Video
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
                      src="https://v16-webapp.tiktok.com/40678f60552e523a2743908c8b76ceaf/62b579f4/video/tos/useast2a/tos-useast2a-pve-0037-aiso/d022cae2fdab4cf9ad356c7bd263530c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1750&bt=875&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZGG1Uwe2NMwx2l7Gb&mime_type=video_mp4&qs=0&rc=NzppNzUzNmlkaDhlNzs2PEBpamU6azQ6ZnI3ZDMzZjgzM0AvMl5gYi8xXzQxYTYwNTQzYSNqNjZucjRfZGBgLS1kL2Nzcw%3D%3D&l=20220624024630010251058228006AB8E7"
                      playsInline=""
                      autoPlay={false}
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
            >
              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <HeartIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>8888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <CommentIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>888</strong>
              </button>

              <button className={cx('ButtonActionItem')}>
                <span className={cx('SpanIconWrapper')}>
                  <ForwardIcon className={cx('actionIcon')} />
                </span>
                <strong className={cx('StrongActionText')}>88</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
