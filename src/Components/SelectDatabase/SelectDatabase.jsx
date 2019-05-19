import React from 'react';
import { dataMetrics } from '../../utilities/dataMetrics';

const SelectDataBase = () => (
	<select>
		{dataMetrics.map(({ name }, i) => (
			<option key={i}>{name}</option>
		))}
	</select>
);

export default SelectDataBase