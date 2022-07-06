import classNames from 'classnames/bind';
import { DownIcon } from '~/components/Icons';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
  return (
    <div className={cx('main-body')}>
      <div className={cx('layout')}>
        <div className={cx('container')}>
          <span className={cx('title')}>Upload video</span>
          <div className={cx('sub-title')}>
            <span className={cx('sub-title-text')}>Post a video to your account</span>
          </div>

          <div className={cx('content')}>
            <div className={cx('uploader')}>
              <div>
                <div className={cx('upload-card', 'before-upload-stage')}>
                  <img
                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                    className={cx('upload-icon')}
                    alt=""
                  ></img>
                  <div className={cx('text-main')}>
                    <span className={cx('text-main-text')}>Select video to upload</span>
                  </div>

                  <div className={cx('text-sub')}>
                    <span className={cx('text-sub-text')}>Or drag ad drop a file</span>
                  </div>

                  <div className={cx('text-video-info')}>
                    <div className={cx('text-video-info-wrapper')}>
                      <span className={cx('text-video-info-text')}>MP4 or WebM</span>
                    </div>

                    <div className={cx('text-video-info-wrapper')}>
                      <span className={cx('text-video-info-text')}>
                        720x1280 resolution or higher
                      </span>
                    </div>

                    <div className={cx('text-video-info-wrapper')}>
                      <span className={cx('text-video-info-text')}>Up to 10 minutes</span>
                    </div>

                    <div className={cx('text-video-info-wrapper')}>
                      <span className={cx('text-video-info-text')}>Less than 2 GB</span>
                    </div>
                  </div>

                  <div className={cx('file-select-btn')}>
                    <button className={cx('select-btn')}>
                      <div className={cx('select-btn-wrapper')}>
                        <div className={cx('select-btn-text')}>Select file</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx('form')}>
              <div className={cx('caption-wrap')}>
                <div>
                  <div className={cx('text-container')}>
                    <span className={cx('caption')}>Caption</span>

                    <span className={cx('require-font')}>
                      <span>0</span>
                      /150
                    </span>
                  </div>

                  <div className={cx('margin-t-4')}>
                    <div className={cx('container-v2')}>
                      <div className={cx('editor')}>
                        <div className={cx('DraftEditor-root DraftEditor-alignLeft')}>
                          <div className={cx('DraftEditor-editorContainer')}>
                            <div className={cx('public-DraftEditor-content')}></div>
                          </div>
                        </div>
                      </div>

                      <div className={cx('icon-style', 'at')}>
                        <img
                          src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg"
                          alt=""
                          style={{ cursor: 'pointer' }}
                        ></img>
                      </div>

                      <div className={cx('icon-style', 'hash')}>
                        <img
                          src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg"
                          alt=""
                          style={{ cursor: 'pointer' }}
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx('container-at', 'hide-display')}></div>
              </div>

              <div className={cx('margin-t-24', 'margin-b-4')}>
                <span className={cx('Cover')}>Cover</span>

                <div className={cx('container-v3')}>
                  <div className={cx('bg-container-v3', 'empty')}>
                    <div className={cx('candidate-v2', 'empty')}></div>
                  </div>
                </div>
              </div>

              <div className={cx('margin-t-24')}>
                <div className={cx('title-v2')}>
                  <span className={cx('title-v2-text')}>Who can view this video</span>
                </div>

                <div
                  className={cx('tiktok-select')}
                  style={{ width: '300px', height: '36px' }}
                >
                  <div className={cx('tiktok-select-selector')}>
                    <div
                      className={cx('tiktok-select-selector-left')}
                      style={{ maxWidth: '90%' }}
                    >
                      <span className={cx('tiktok-select-selector-text')}>Public</span>
                    </div>

                    <div className={cx('tiktok-select-selector-postfix-icon')}>
                      <DownIcon />
                    </div>
                  </div>
                </div>

                <div className={cx('title-v2', 'margin-t-24')}>
                  <span className={cx('title-v2-text')}>Allow users to:</span>
                </div>

                <div className={cx('checkbox-container')}>
                  <div className={cx('checkbox')}>
                    <div className={cx('checkbox-wrapper')}>
                      <label className={cx('checkbox-label')}>
                        <span className={cx('label-text')}>Comment</span>
                      </label>

                      <label className={cx('checkbox-input-wrapper')}>
                        <input type={'checkbox'} />
                        <span className={cx('checkmark')}></span>
                      </label>
                    </div>
                  </div>

                  <div className={cx('checkbox')}>
                    <div className={cx('checkbox-wrapper')}>
                      <label className={cx('checkbox-label')}>
                        <span className={cx('label-text')}>Duet</span>
                      </label>

                      <label className={cx('checkbox-input-wrapper')}>
                        <input type={'checkbox'} />
                        <span className={cx('checkmark')}></span>
                      </label>
                    </div>
                  </div>

                  <div className={cx('checkbox')}>
                    <div className={cx('checkbox-wrapper')}>
                      <label className={cx('checkbox-label')}>
                        <span className={cx('label-text')}>Stitch</span>
                      </label>

                      <label className={cx('checkbox-input-wrapper')}>
                        <input type={'checkbox'} />
                        <span className={cx('checkmark')}></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx('margin-t-21')}></div>

              <div>
                <span className={cx('copyright-text')}>
                  We'll check your video for pontential copyright infringements on used
                  sounds. If infringements are found, you can edit the video before
                  posting.
                </span>

                <span className={cx('Learn-more')}>
                  <span className={cx('Learn-more-text')}> Learn more</span>
                </span>
              </div>

              <div className={cx('button-row')}>
                <div className={cx('btn-cancel')}>
                  <button className={cx('btn-cancel-wrapper')}>
                    <div className={cx('btn-text-wrapper')}>
                      <div className={cx('btn-text')}>Discard</div>
                    </div>
                  </button>
                </div>

                <div className={cx('btn-post')}>
                  <button className={cx('btn-cancel-wrapper', 'disable')}>
                    <div className={cx('btn-text-wrapper')}>
                      <div className={cx('btn-text')}>Post</div>
                    </div>
                  </button>
                </div>
              </div>

              <div className={cx('switch-wrap')}>
                <div className={cx('switch-text-wrapper')}>
                  <span className={cx('switch-text')}>Run a copy right check</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
