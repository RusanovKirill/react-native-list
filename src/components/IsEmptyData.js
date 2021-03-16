import React, {
	memo
} from 'react';
import PropTypes from 'prop-types';

// Styled
import styled from 'styled-components/native';

// Components
import { Text } from 'react-native';

const TextNoData = styled(Text)`
  flex: 1;
	font-size: 18px;
	margin-top: 30px;
	line-height: 24px;
	text-align: center;
`;

const IsEmptyData = memo(({ text }) => {
	return <TextNoData>{text || 'Don\'t have data'}</TextNoData>;
});

IsEmptyData.propTypes = {
	text: PropTypes.string,
};

IsEmptyData.defaultProps = {
	text: '',
};

export default IsEmptyData;
