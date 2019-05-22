import React, { useContext } from 'react';
import { dataMetrics } from '../../utilities/dataMetrics';
import { DataBaseContext } from '../Store/DataBaseContext';

const SelectDataBase = () => {
	const value = useContext(DataBaseContext);

	console.log(value)

	const selectMetric = ({ target: { value } }) => {
		const matchingDataBase = dataMetrics.find(({ name }) => value === name);
		// selectDataBase(matchingDataBase);
	};

	return (
		<select onClick={selectMetric}>
			{dataMetrics.map(({ name }, i) => (
				<option key={i}>{name}</option>
			))}
		</select>
	);
};

export default SelectDataBase;
