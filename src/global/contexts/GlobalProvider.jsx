import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [loader, setLoader] = useState(false);

	return (
		<GlobalContext.Provider
			value={{
				loader,
				setLoader,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
