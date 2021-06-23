import { useState, createContext } from "react";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
	const [country, setCountry] = useState("");

	const values = { country, setCountry };

	return (
		<CountryContext.Provider value={values}>{children}</CountryContext.Provider>
	);
};

export default CountryContextProvider;
