import classNames from 'classnames/bind';
import { CoinIcon, RightIcon, YesTickIcon } from '~/components/Icons';
import styles from './GetCoin.module.scss';

const cx = classNames.bind(styles);

function GetCoin() {
  return (
    <div className={cx('DivMaiContainer')}>
      <div className={cx('DivContentContainer')}>
        <div className={cx('DivContentWrapper')}>
          <section className={cx('SectionContentWrapper')}>
            <div className={cx('DivTitleInfoContainer')}>
              <span className={cx('SpanTitleInfoCoin')}>Get coins</span>
              <a href="/">
                <span className={cx('SpanTitleInfoTrans')}>View transaction history</span>
              </a>
            </div>

            <div className={cx('DivProfileInfo')}>
              <div className={cx('DivProfileContainer')}></div>
              <div className={cx('DivNameCoinInfo')}>
                <span className={cx('SpanNameInfo')}>Master IHI</span>
                <div className={cx('DivCoinInfo')}>
                  <CoinIcon />
                  <span className={cx('SpanCoinNum')}>888</span>
                </div>
              </div>

              <div className={cx('DivExchangeContainer')}>
                <div className={cx('DivExchangeTitle')}>From LIVE gifts: $0.00</div>

                <div className={cx('DivExchangeSubtitle')}>
                  Exchange earnings to coin
                  <RightIcon />
                </div>
              </div>
            </div>
          </section>

          <p className={cx('PRechargeCoins')}>Buy coins</p>

          <div className={cx('DivCoinsBkgContainer')}>
            <div className={cx('DivOfferInfo')}>
              <h2 className={cx('H2OfferTitle')}>Enjoy this web-exclusive offer!</h2>
              <ul className={cx('UlRechargeBenefitList')}>
                <li className={cx('LiRechargeBenefitListItem')}>
                  <YesTickIcon className={cx('StyledTick')} />
                  <span className={cx('SpanRechargeBenefit')}>
                    No in-app service fees
                  </span>
                </li>

                <li className={cx('LiRechargeBenefitListItem')}>
                  <YesTickIcon className={cx('StyledTick')} />
                  <span className={cx('SpanRechargeBenefit')}>Custom amounts</span>
                </li>

                <li className={cx('LiRechargeBenefitListItem')}>
                  <YesTickIcon className={cx('StyledTick')} />
                  <span className={cx('SpanRechargeBenefit')}>More payment methods</span>
                </li>
              </ul>
            </div>

            <div className={cx('DivCoinsListContainer')}>
              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>70</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 19,100</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>350</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 95,500</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>700</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 191,000</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>1,400</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 382,000</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>3,500</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 955,000</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>7,000</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 1,910,000</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>17,500</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>₫ 4,775,000</span>
                </div>
              </div>

              <div className={cx('DivContainer')}>
                <div className={cx('DivNumContainer')}>
                  <span className={cx('SpanNumIcon')}>
                    <CoinIcon className={cx('StyledCoinIcon')} />
                  </span>

                  <span className={cx('SpanNumDisplay')}>Custom</span>
                </div>

                <div className={cx('DivTextContainer')}>
                  <span className={cx('SpanTextNow')}>Large amount supported</span>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('DivTotalContainer')}>
            <div className={cx('DivPaymentMethodsContainer')}>
              <span className={cx('SpanTotalText')}>Payment method</span>
              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard_light_0883be.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/maestro_188b29.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/diners_a3de24.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/discover_5ec158.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/momo_4256e5.png"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/zalopay-icon_e8534b.svg"
                className={cx('ImgPaymentIcon')}
              ></img>

              <img
                alt=""
                src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/2c2p-border_2ec2d6.png"
                className={cx('ImgPaymentIcon')}
              ></img>
            </div>
          </div>

          <div className={cx('DivTotalContainer')}>
            <span className={cx('SpanTotalText')}>Total</span>
            <span className={cx('SpanTotalMount')}>₫ 0</span>
          </div>

          <div className={cx('DivButtonContainer')}>
            <button className={cx('Button-StyledBuyButton')} disabled>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCoin;
