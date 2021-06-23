import { useState, createContext } from "react";

export const RegionContext = createContext();

export const RegionContextProvider = ({ children }) => {
	const [region, setRegion] = useState("");

	const values = { region, setRegion };

	return (
		<RegionContext.Provider value={values}>{children}</RegionContext.Provider>
	);
};

export default RegionContextProvider;
