import React, { createContext } from 'react';
import { DataBaseContext } from '../Store/DataBaseContext';
import ControlledForm from '../ControlledForm/';
import { dataMetrics } from '../../utilities/dataMetrics';
import './App.scss';

const App = () => {
	return (
		<DataBaseContext.Provider value={dataMetrics[0]}>
			<ControlledForm />
		</DataBaseContext.Provider>
	);
}; 

export default App;
