import PropTypes from 'prop-types';
import React from 'react';
import {
} from 'react-native';

// Components
import List from '../../components/List';

const UserListScreen = ({ navigation }) => {

	const onPress = (id) => navigation.navigate('Profile', { id });

	return (
		<List
			_onPress={onPress}
			url="https://api.github.com/users"
		/>
	);
};

UserListScreen.propTypes = {
	navigation: PropTypes.object,
};

UserListScreen.defaultProps = {
	navigation: {},
};

export default UserListScreen;
