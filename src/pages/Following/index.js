import classNames from 'classnames/bind';
import { VerifiedIcon } from '~/components/Icons';
import styles from './Following.scss';

const cx = classNames.bind(styles);
function Following() {
  return (
    <div>
      <div className={cx('DivUserListWrapper')}>
        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d7bfff9cf5044e5fbe1f49d459ebd539_1656307739?x-expires=1656507600&x-signature=asfCV0NZZYhwKdweCtE%2BgLYT7iM%3D"
                alt=""
              ></img>
              <div className={cx('DivBasicPlayerWrapper')}>
                  <video
                    className={cx('VideoBasic')}
                    src="https://v16-webapp.tiktok.com/9c5c5bf8f1bcdbf40f8576670cbfe151/62bc5195/video/tos/useast2a/tos-useast2a-pve-0037-aiso/14013d1b295b40c18a3370baa52770e2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3706&bt=1853&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZMk~8we2N6Yhml7Gb&mime_type=video_mp4&qs=0&rc=aTNpO2dlOmc3ZztmPDw1OkBpM2l0cmU6ZmxtZDMzZjgzM0AzNi02MDBgX2ExMS8vNV9fYSMzbXEvcjRfcnBgLS1kL2Nzcw%3D%3D&l=202206290720140102440870820E05613B"                    
                    autoPlay={false}
                    loop
                    muted
                  ></video>
                </div>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1656658800&x-signature=FBklyc6SIMqgUG17Ei3EtOZv7W8%3D"
                  alt=""
                ></img>                
              </span>

              <h5 className={cx('H5Username')}>AnNhiên ❤️ BốiBối</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>annhien_boibo</span>
                <div className={cx('DivVerifiedBadgeContainer')}>
                  <VerifiedIcon />
                </div>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/028bbc6d9f2d4ec8ba550dbe201db3ea_1654166089?x-expires=1656507600&x-signature=%2BhBGro9SFuaz%2Buz6o%2FmXLJa05LI%3D"
                alt=""
              ></img>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1656658800&x-signature=%2Bkv2en4v8aK1aENg0ZJXj5glhqI%3D"
                  alt=""
                ></img>
              </span>

              <h5 className={cx('H5Username')}>Đào Lê Phương Hoa</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>hoaa.hanassii</span>
                <div className={cx('DivVerifiedBadgeContainer')}>
                  <VerifiedIcon />
                </div>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/106be451dd35435e975cb73ca3faa8ab_1656247241?x-expires=1656507600&x-signature=UCeCTmRtXftYcLnkiPfnZE3iDVw%3D"
                alt=""
              ></img>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1656658800&x-signature=8LzpPaWGiZDEM%2FoMVcIATlmPU2w%3D"
                  alt=""
                ></img>
              </span>

              <h5 className={cx('H5Username')}>𝘿𝙆𝙖𝙬𝙣ッ</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>dkawn.me</span>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/106be451dd35435e975cb73ca3faa8ab_1656247241?x-expires=1656507600&x-signature=UCeCTmRtXftYcLnkiPfnZE3iDVw%3D"
                alt=""
              ></img>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1656658800&x-signature=8LzpPaWGiZDEM%2FoMVcIATlmPU2w%3D"
                  alt=""
                ></img>
              </span>

              <h5 className={cx('H5Username')}>VTV24</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>vtv24news</span>
                <div className={cx('DivVerifiedBadgeContainer')}>
                  <VerifiedIcon />
                </div>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/106be451dd35435e975cb73ca3faa8ab_1656247241?x-expires=1656507600&x-signature=UCeCTmRtXftYcLnkiPfnZE3iDVw%3D"
                alt=""
              ></img>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1656658800&x-signature=8LzpPaWGiZDEM%2FoMVcIATlmPU2w%3D"
                  alt=""
                ></img>
              </span>

              <h5 className={cx('H5Username')}>Ngân Hà🍌</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>luongthingocha</span>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

        <div className={cx('DivUserCard')}>
          <a className={cx('AUserCard')} href="/">
            <div className={cx('DivContainer')}>
              <img
                className={cx('ImgPoster')}
                src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/106be451dd35435e975cb73ca3faa8ab_1656247241?x-expires=1656507600&x-signature=UCeCTmRtXftYcLnkiPfnZE3iDVw%3D"
                alt=""
              ></img>
            </div>

            <div className={cx('DivInfoContainer')}>
              <span className={cx('SpanAvatarContainer')}>
                <img
                  className={cx('ImgAvatar')}
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/80b4fd9f5ad407f7e1e2c20ca17a2550~c5_100x100.jpeg?x-expires=1656658800&x-signature=8LzpPaWGiZDEM%2FoMVcIATlmPU2w%3D"
                  alt=""
                ></img>
              </span>

              <h5 className={cx('H5Username')}>MOCA 🐶🇻🇳</h5>

              <h6 className={cx('H6UniqueIdContainer')}>
                <span className={cx('SpanUniqueId')}>mocachodien</span>
                <div className={cx('DivVerifiedBadgeContainer')}>
                  <VerifiedIcon />
                </div>
              </h6>

              <div className={cx('DivButtonContainer')}>
                <button className={cx('Button')}>Follow</button>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Following;
