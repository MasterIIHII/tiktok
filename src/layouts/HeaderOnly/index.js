import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        {children}
      </div>
    </div>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLayout;
