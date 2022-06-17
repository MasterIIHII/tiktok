import proTypes from 'prop-types';

function Menu({ children }) {
  return <nav>{children}</nav>;
}

Menu.proTypes = {
  children: proTypes.node.isRequired,
};

export default Menu;
