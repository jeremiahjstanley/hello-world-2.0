import React, { useState } from 'react';
import SelectDatabase from '../SelectDatabase';
import { countries } from '../../utilities/countryMetrics';

const ControlledForm = () => {
	const [country, setCountry, input] = useState('');

	const handleChange = ({ target: { value } } = '') => {
		const country = countries.find(({ name }) => value === name);
		!!country && setCountry({ country });
	};

	const valdiateInput = () => (input !== country.name ? setCountry('') : null);

	const countryTypeAhead = () =>
		countries
			.filter(({ name, alpha_3 }) => {
				const regex = new RegExp(input, 'gi');
				return (name || alpha_3).match(regex);
			})
			.splice(0, 4)
			.map(({ name }, i) => <option key={i}>{name}</option>);

	return (
		<form>
			<div>
				<input
					type="text"
					placeholder="Enter a Country"
					onChange={handleChange}
					onBlur={valdiateInput}
					list="countries"
				/>
				<datalist id="countries">{countryTypeAhead()}</datalist>
			</div>
			<SelectDatabase />
			<button disabled={!!!country}>Search</button>
		</form>
	);
};

export default ControlledForm;
