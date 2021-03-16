import React from 'react';
import PropTypes from 'prop-types';

// Components
import {
	FlatList,
	SafeAreaView,
} from 'react-native';

// Styled
import styled from 'styled-components/native';

// Hooks
import { useFetch } from '../helpers/hooks';

// Components
import Row from './Row';
import IsEmptyData from './IsEmptyData';

const SafeAreaViewHolder = styled(SafeAreaView)`
	flex: 1;
`;

const List = ({
	url,
	_onPress,
	windowSize,
	initialNumToRender,
	maxToRenderPerBatch,
	removeClippedSubviews,
	onEndReachedThreshold,
	updateCellsBatchingPeriod,
}) => {
	const {
		stateData,
		isLoading,
		fetchData,
	} = useFetch(url);

	const renderItem = ({ item }) => <Row {...item}
		onPress={_onPress}
		innerMarginBottom={10}
		innerPaddingVartical={10}
		innerPaddingHorizontal={10}
	/>;

	return (
		<SafeAreaViewHolder>
			<FlatList
				data={stateData || []}
				onRefresh={fetchData}
				refreshing={isLoading}
				renderItem={renderItem}
				windowSize={windowSize}
				nitialNumToRender={initialNumToRender}
				maxToRenderPerBatch={maxToRenderPerBatch}
				ListEmptyComponent={() => <IsEmptyData />}
				keyExtractor={(item, index) => item + index}
				removeClippedSubviews={removeClippedSubviews}
				onEndReachedThreshold={onEndReachedThreshold}
				updateCellsBatchingPeriod={updateCellsBatchingPeriod}
				onEndReached={({ distanceFromEnd }) => {
					if(!isLoading) fetchData();
				}}
				contentContainerStyle={{
					paddingTop: 10,
				}}
			/>
		</SafeAreaViewHolder>
	);
};

List.propTypes = {
	url: PropTypes.string,
	_onPress: PropTypes.func,
	windowSize: PropTypes.number,
	initialNumToRender: PropTypes.number,
	removeClippedSubviews: PropTypes.bool,
	maxToRenderPerBatch: PropTypes.number,
	onEndReachedThreshold: PropTypes.number,
	updateCellsBatchingPeriod: PropTypes.number,
};

List.defaultProps = {
	url: '',
	windowSize: 5,
	_onPress: () => { },
	initialNumToRender: 10,
	maxToRenderPerBatch: 10,
	onEndReachedThreshold: 0.5,
	removeClippedSubviews: false,
	updateCellsBatchingPeriod: 30,
};

export default List;
