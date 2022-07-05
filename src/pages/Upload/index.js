import classNames from 'classnames/bind';
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
                            <div className={cx('public-DraftEditor-content')}>

                            </div>
                          </div>
                        </div>                        
                      </div>

                      <div className={cx('icon-style', 'at')}>
                        <img src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg'
                        alt='' style={{cursor: "pointer"}}></img>
                      </div>

                      <div className={cx('icon-style', 'hash')}>
                        <img src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg'
                        alt='' style={{cursor: "pointer"}}></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx('container-at', 'hide-display')}>

                </div>
              </div>

              <div className={cx('margin-t-24', 'margin-b-4')}>
                <span className={cx('Cover')}>Cover</span>

                <div className={cx('container-v3')}>
                  <div className={cx('bg-container-v3', 'empty')}>
                    <div className={cx('candidate-v2', 'empty')}>
                    
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx('margin-t-24')}>

              </div>

              <div>

              </div>

              <div className={cx('switch-wrap')}>

              </div>

              <div>

              </div>

              <div className={cx('button-row')}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
