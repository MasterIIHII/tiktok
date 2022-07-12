import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { DownIcon2, RightIcon } from '~/components/Icons';
import styles from './Feedback.module.scss';
import '~/components/Animation test/Turn.css';

const cx = classNames.bind(styles);

function Feedback() {
  const refTest = useRef();
  const refTest1 = useRef();
  const refTest2 = useRef();
  const refTest3 = useRef();
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const turnReverseAnimation = { animation: 'turn-reverse-icon 300ms forwards' };
  const turnAnimation = { animation: 'turn-icon 300ms forwards' };

  const test = (line) => {
    let useThisRef = refTest;

    if (line === 1) {
      useThisRef = refTest1;
    } else if (line === 2) {
      useThisRef = refTest2;
    } else if (line === 3) {
      useThisRef = refTest3;
    }

    if (useThisRef.current.clientHeight === 0) {
      useThisRef.current.style.height = useThisRef.current.scrollHeight + 'px';
      useThisRef.current.style.opacity = '1';
      if (line === 1) {
        setActive1(true);
      } else if (line === 2) {
        setActive2(true);
      } else if (line === 3) {
        setActive3(true);
      } else setActive(true);
    } else {
      useThisRef.current.style.height = '0px';
      useThisRef.current.style.opacity = '0';
      if (line === 1) {
        setActive1(false);
      } else if (line === 2) {
        setActive2(false);
      } else if (line === 3) {
        setActive3(false);
      } else setActive(false);
    }
  };

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
                  <div onClick={test} className={cx('option-container')}>
                    <h3 className={cx('text')}>How to log in</h3>
                    <DownIcon2
                      className={cx('icon-expand')}
                      style={active ? turnAnimation : turnReverseAnimation}
                    />
                  </div>

                  <div
                    ref={refTest}
                    className={cx('content-container')}
                    style={{ opacity: '0', height: '0px' }}
                  >
                    <div className={cx('content-inside-container')}>
                      <div className={cx('content')}>
                        <p className={cx('text2')}>
                          <div className={cx('text2')}>To log into an account:</div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>For TikTok Deskhop Web:</div>
                          <div className={cx('text2')}>
                            1. Click the "Login" icon on the upper right corner
                          </div>
                          <div className={cx('text2')}>2. Select login method</div>
                          <div className={cx('text2')}>
                            3. Enter your account information or continue with selected
                            login method
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>For TikTok Mobile Web:</div>
                          <div className={cx('text2')}>1. Tap "Me" to go to profile</div>
                          <div className={cx('text2')}>2. Tap "Sign up"</div>
                          <div className={cx('text2')}>
                            3. Tag "Log in" at the bottom of the page
                          </div>
                          <div className={cx('text2')}>4. Select login method</div>
                          <div className={cx('text2')}>
                            5. Enter your account information or continue with selected
                            login method
                          </div>
                        </p>
                      </div>

                      <div className={cx('is-helpful-container')}>
                        <p className={cx('helpful-text')}>Is your problem resolved?</p>
                        <button className={cx('yes-btn', 'helpful-btn')}>Yes</button>
                        <button className={cx('no-btn', 'helpful-btn')}>No</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx('detail-container')}>
                  <div onClick={() => test(1)} className={cx('option-container')}>
                    <h3 className={cx('text')}>How to delete posted videos</h3>
                    <DownIcon2
                      className={cx('icon-expand')}
                      style={active1 ? turnAnimation : turnReverseAnimation}
                    />
                  </div>

                  <div
                    ref={refTest1}
                    className={cx('content-container')}
                    style={{ opacity: '0', height: '0px' }}
                  >
                    <div className={cx('content-inside-container')}>
                      <div className={cx('content')}>
                        <p className={cx('text2')}>
                          <div className={cx('text2')}>To delete a video:</div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            1. View the video you want to delete.
                          </div>
                          <div className={cx('text2')}>2. Click "...".</div>
                          <div className={cx('text2')}>3. Select "Delete".</div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            Note: This feature isn't available for TikTok Mobile Web.
                          </div>
                        </p>
                      </div>

                      <div className={cx('is-helpful-container')}>
                        <p className={cx('helpful-text')}>Is your problem resolved?</p>
                        <button className={cx('yes-btn', 'helpful-btn')}>Yes</button>
                        <button className={cx('no-btn', 'helpful-btn')}>No</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx('detail-container')}>
                  <div onClick={() => test(2)} className={cx('option-container')}>
                    <h3 className={cx('text')}>Can't log in with Instagram</h3>
                    <DownIcon2
                      className={cx('icon-expand')}
                      style={active2 ? turnAnimation : turnReverseAnimation}
                    />
                  </div>

                  <div
                    ref={refTest2}
                    className={cx('content-container')}
                    style={{ opacity: '0', height: '0px' }}
                  >
                    <div className={cx('content-inside-container')}>
                      <div className={cx('content')}>
                        <p className={cx('text2')}>
                          <div className={cx('text2')}>
                            Instagram login is no longer supported. Please log in with
                            your phone number, email, or other social media account. If
                            you can't log in, use the TikTok app to recover your account.
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>1. Click the "Login" icon</div>
                          <div className={cx('text2')}>
                            2. Select "Log in with Instagram"
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>For TikTok Mobile Web:</div>
                          <div className={cx('text2')}>1. Tap "Me" to go to profile</div>
                          <div className={cx('text2')}>2. Tap "Sign up"</div>
                          <div className={cx('text2')}>
                            3. Tap "Log in" at the bottom of the page
                          </div>
                          <div className={cx('text2')}>
                            4. Select "Log in with Instagram"
                          </div>
                        </p>
                      </div>

                      <div className={cx('is-helpful-container')}>
                        <p className={cx('helpful-text')}>Is your problem resolved?</p>
                        <button className={cx('yes-btn', 'helpful-btn')}>Yes</button>
                        <button className={cx('no-btn', 'helpful-btn')}>No</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx('detail-container')}>
                  <div onClick={() => test(3)} className={cx('option-container')}>
                    <h3 className={cx('text')}>
                      This phone number is already registered
                    </h3>
                    <DownIcon2
                      className={cx('icon-expand')}
                      style={active3 ? turnAnimation : turnReverseAnimation}
                    />
                  </div>

                  <div
                    ref={refTest3}
                    className={cx('content-container')}
                    style={{ opacity: '0', height: '0px' }}
                  >
                    <div className={cx('content-inside-container')}>
                      <div className={cx('content')}>
                        <p className={cx('text2')}>
                          <div className={cx('text2')}>
                            Each phone number can only be associated with one TikTok
                            account. To associate your phone number with a new account,
                            change the phone number linked to your current account or
                            delete the account.
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            The deleted account will be deactivated for 30 days and then
                            removed permanently. After that, the phone number can be
                            linked to a new account
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            To find the account currently associated with your phone
                            number:
                          </div>
                          <div className={cx('text2')}>For TikTok Desktop Web:</div>
                          <div className={cx('text2')}>1. Click the "Login" icon</div>
                          <div className={cx('text2')}>
                            2. Select "Use phone/email/username"
                          </div>
                          <div className={cx('text2')}>
                            3. Enter your phone number to log in
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>From the TikTok app:</div>
                          <div className={cx('text2')}>
                            1. Tap "Log in" at the bottom of the page
                          </div>
                          <div className={cx('text2')}>
                            2. Select "Use phone/email/username"
                          </div>
                          <div className={cx('text2')}>
                            3. Enter your phone number to log in
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            If your phone number is associated with another account:
                          </div>
                          <div className={cx('text2')}>For TikTok Desktop Web:</div>
                          <div className={cx('text2')}>
                            1. When you're logged out, click "Log in" at the top
                          </div>
                          <div className={cx('text2')}>2. Click "Sign up"</div>
                          <div className={cx('text2')}>3. Click "Use phone or email"</div>
                          <div className={cx('text2')}>
                            4. Enter your birthday and phone number
                          </div>
                          <div className={cx('text2')}>
                            5. Enter the code sent to your device
                          </div>
                          <div className={cx('text2')}>
                            6. You'll see the profile picture of the account associated
                            with the number. If this is your account, tap "Log in instead"
                          </div>
                          <div className={cx('text2')}>
                            7. If this isn't your account, tap "Continue with this number"
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>From the TikTok app:</div>
                          <div className={cx('text2')}>
                            1. When you're logged out, tap "Use phone or email" on the
                            sign in screen
                          </div>
                          <div className={cx('text2')}>
                            2. Enter your birthday and phone number
                          </div>
                          <div className={cx('text2')}>3. Click "Send code"</div>
                          <div className={cx('text2')}>
                            4. Enter the code sent to your device
                          </div>
                          <div className={cx('text2')}>
                            5. You'll see the profile picture of the account associated
                            with the number. If this is your account, tap "Log in instead"
                          </div>
                          <div className={cx('text2')}>
                            6. If this isn't your account, tap "Continue with this number"
                          </div>
                          <div className={cx('text2')}> </div>
                          <div className={cx('text2')}>
                            We'll remove the phone number from the other account and
                            associate it with the new account. The previous account will
                            be notified that the phone number was used to create a new
                            account
                          </div>
                        </p>
                      </div>

                      <div className={cx('is-helpful-container')}>
                        <p className={cx('helpful-text')}>Is your problem resolved?</p>
                        <button className={cx('yes-btn', 'helpful-btn')}>Yes</button>
                        <button className={cx('no-btn', 'helpful-btn')}>No</button>
                      </div>
                    </div>
                  </div>
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
