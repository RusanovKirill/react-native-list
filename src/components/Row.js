import React from 'react';
import {
	Text,
	View,
	Image,
	Linking,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Styled
import styled from 'styled-components/native';

const ViewHolder = styled(View)`
	width: 95%;
	elevation: 1;
	display: flex;
	margin: 0 auto;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
	background-color: #fff;
	justify-content: space-between;
	box-shadow: 0px 5px 10px rgba(34, 60, 80, 0.3);
	margin-bottom: ${props => props.innerMarginBottom ? props.innerMarginBottom : 0}px;
	paddingVertical: ${props => props.innerPaddingVartical ? props.innerPaddingVartical : 0}px;
	paddingHorizontal: ${props => props.innerPaddingHorizontal ? props.innerPaddingHorizontal : 0}px;
`;

const TextInfo = styled(Text)`
	color: black;
	font-size: 14px;
	line-height: 18px;
`;

const TextLink = styled(Text)`
	color: blue;
	font-size: 14px;
	line-height: 18px;
	text-decoration: underline;
`;

const Row = ({
	login,
	onPress,
	html_url,
	avatar_url,
	activeOpacity,
	innerMarginBottom,
	innerPaddingVartical,
	innerPaddingHorizontal,
}) => {
	const redirect = (url) => Linking.openURL(url);

	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			onPress={() => onPress(login)}
		>
			<ViewHolder
				innerMarginBottom={innerMarginBottom}
				innerPaddingVartical={innerPaddingVartical}
				innerPaddingHorizontal={innerPaddingHorizontal}
			>
				<Image style={styles.image} source={{ uri: avatar_url }} />

				<TextInfo>{login}</TextInfo>

				<TextLink onPress={() => redirect(html_url)}>
					Link user github
				</TextLink>
			</ViewHolder>
		</TouchableOpacity>
	);
};

export default Row;

Row.propTypes = {
	login: PropTypes.string,
	onPress: PropTypes.func,
	html_url: PropTypes.string,
	avatar_url: PropTypes.string,
	activeOpacity: PropTypes.number,
	innerMarginBottom: PropTypes.number,
	innerPaddingVartical: PropTypes.number,
	innerPaddingHorizontal: PropTypes.number,
};

Row.defaultProps = {
	login: '',
	html_url: '',
	avatar_url: '',
	onPress: () => { },
	activeOpacity: 0.85,
};

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		borderRadius: 8,
		resizeMode: "cover",
	}
});
