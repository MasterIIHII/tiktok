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
  HashIcon,
  MusicIcon,
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

      <div className={cx('DivUserContainer')}>
        <p className={cx('PTitle')}>Suggested accounts</p>      
        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>        

        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>

        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>

        <div className={cx('DivShowMoreTextContainer')}>
          <p className={cx('PShowMoreText')}>See all</p>
        </div>
      </div>

      <div className={cx('DivUserContainer')}>
        <p className={cx('PTitle')}>Following accounts</p>      
        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>        

        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>

        <div className={cx('userLinkContainer')}>                  

          <a className={cx('user-avatar')} href='/'> 
            <div className={cx('DivContainer-StyleUserAvatar')} style={{width: "32px", height: "32px"}} >
              <span className={cx('SpanAvatarContainer-StyleAvatar')} style={{width: "32px", height: "32px"}}>
              <img 
                alt=''
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2e53c9b20da646a360ccf6c26859882b~c5_100x100.jpeg?x-expires=1655798400&amp;x-signature=%2FE8klFpORqhoJQD8Ly%2BaNigP198%3D"
                className={cx('ImgAvatar')}
              />  
              </span>              
            </div>
          </a>
          <a href='/' className={cx('StyleUserContentLink')}>
            <div className={cx('DivUserTitleWrapper')}>
              <h4 className={cx('H4UserTitle')}>hoaahanassii</h4>
              <div className={cx('suggest-user-bluev')}> 
                <svg class="tiktok-shsbhf-StyledVerifyBadge e1aglo370" width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#20D5EC"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z" fill="white"></path></svg>
              </div>
            </div>
            <p className={cx('PUserDesc')}>Đào Lê Phương Hoa</p>
          </a>
        </div>

        <div className={cx('DivShowMoreTextContainer')}>
          <p className={cx('PShowMoreText')}>See more</p>
        </div>
      </div>

      <div className={cx('DivDiscoverContainer')}>
        <p className={cx('PTitle')}>Discover</p>

        <div className={cx('DivDiscoverListContainer')}>
          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>7749hieuung</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>sansangthaydoi</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>genzlife</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>thuthach7ngay</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <MusicIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>Ai Chung Tình Được Mãi - Trung Quân Idol</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <MusicIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>Không Sao Mà Em Đây Rồi | Thùy Chi | Thong Dong Mà Hát</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>mixicity</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <HashIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>csgoonline</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <MusicIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
            </div>
          </a>

          <a className={cx('StyledTmpLink')} href="/tag">
            <div className={cx('DivDiscoverItemContainer')}>
              <MusicIcon className={cx('StyledNumber')}/>
              <p className={cx('PText')}>Vì Mẹ Anh Bắt Chia Tay | Miu Lê x Karik x Châu Đăng Khoa</p>
            </div>
          </a>

        </div>
      </div>

      <div className={cx('DivPlaceholder')}></div>

      <div className={cx('DivFooterContainer')}>
        <div className={cx('DivLinkContainer')}>
          <a className={cx('StyledNavLink')} href='/about'>About</a>
          <a className={cx('StyledNavLink')} href='/browse'>Tiktok Browse</a>
          <a className={cx('StyledNavLink')} href='/newsroom'>Newsroom</a>
          <a className={cx('StyledNavLink')} href='/contact'>Contact</a>
          <a className={cx('StyledNavLink')} href='/careers'>Careers</a>
          <a className={cx('StyledNavLink')} href='/bytedance'>ByteDance</a>
        </div>

        <div className={cx('DivLinkContainer')}>
          <a className={cx('StyledNavLink')} href='/forgood'>Tiktok for Good</a>
          <a className={cx('StyledNavLink')} href='/advertise'>Advertise</a>
          <a className={cx('StyledNavLink')} href='/developers'>Developers</a>
          <a className={cx('StyledNavLink')} href='/transparency'>Transparency</a>
          <a className={cx('StyledNavLink')} href='/tiktokrewards'>Tiktok Rewards</a>
        </div>

        <div className={cx('DivLinkContainer')}>
          <a className={cx('StyledNavLink')} href='/help'>Help</a>
          <a className={cx('StyledNavLink')} href='/safety'>Safety</a>
          <a className={cx('StyledNavLink')} href='/terms'>Terms</a>
          <a className={cx('StyledNavLink')} href='/privacy'>Privacy</a>
          <a className={cx('StyledNavLink')} href='/creator-portal'>Creator Portal</a>
          <a className={cx('StyledNavLink')} href='/community-guidelines'>Community Guidlines</a>
        </div>

      <span className={cx('SpanCopyright')}>@ 2022 TikTok</span>

      </div>      
    </aside>    
  );
}

export default Sidebar;
