import { useContext } from "react";
import { RegionContext } from "../context/RegionContext";
import { CountryContext } from "../context/CountryContext";
const Input = () => {
	const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	const { region, setRegion } = useContext(RegionContext);
	const { country, setCountry } = useContext(CountryContext);

	console.log(region);

	return (
		<section className="inputContainer">
			<input
				value={country}
				type="text"
				name="country"
				placeholder="Search for a country..."
				onChange={e => setCountry(e.target.value)}
			></input>
			<div className="region">
				<select
					name="Region"
					value={region}
					onChange={e => setRegion(e.target.value)}
				>
					<option value="">Filter by region</option>
					{REGIONS.map(region => (
						<option key={region}>{region}</option>
					))}
				</select>
			</div>
		</section>
	);
};

export default Input;
