import PropTypes from 'prop-types';
import React from 'react';

// Components
import List from '../../components/List';


const UserScreen = ({ route }) => {
  return (
    <List
      url={`https://api.github.com/users/${route.params.id}/followers`}
    />
  );
};

UserScreen.propTypes = {
	route: PropTypes.object,
};

UserScreen.defaultProps = {
	route: {},
};

export default UserScreen;
