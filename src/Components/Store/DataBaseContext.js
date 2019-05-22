import React, { createContext } from 'react';
import { dataMetrics } from '../../utilities/dataMetrics';

export const DataBaseContext = createContext({
	dataBase: dataMetrics[0],
	selectDataBase: () => {}
});
