import React, { useState } from 'react';
import SelectDatabase from '../SelectDatabase';
import { countries } from '../../utilities/countryMetrics';

const ControlledForm = () => {
	const [state, setState] = useState({});

	const handleChange = ({ target: { value } } = '') => {
		const country = countries.find(({ name }) => value === name) || '';
		setState({state: {input: value, country}});
	};

	const countryTypeAhead = () =>
		countries
			.filter(({ name, alpha_3 }) => {
				console.log(state.input)
				const regex = new RegExp(state.input, 'gi');
				return (name || alpha_3).match(regex);
			})
			.splice(0, 4)
			.map(({ name }, i) => <option key={i}>{name}</option>);

	return (
		<form>
			<div>
				<input type="text" placeholder="Enter a Country" onChange={handleChange} list="countries" />
				<datalist id="countries">{countryTypeAhead()}</datalist>
			</div>
			<SelectDatabase />
			<button disabled={!!!state.country}>Search</button>
		</form>
	);
};

export default ControlledForm;
