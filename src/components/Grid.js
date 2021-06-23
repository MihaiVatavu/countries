import { RegionContext } from "../context/RegionContext";
import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../context/CountryContext";
import { Link } from "react-router-dom";
import Input from "./Input";
import Card from "./Card";

const Grid = () => {
	const { region } = useContext(RegionContext);
	const { country } = useContext(CountryContext);
	const [apiResponse, setApiResponse] = useState("");

	const baseURL = "https://restcountries.eu/rest/v2/";
	//Make the API call
	const getdata = async (param1, param2) => {
		if (param1) {
			try {
				let response = await fetch(`${baseURL}${param1}${param2}`);
				let data = await fetch(response.url).then(resp => {
					return resp.json();
				});
				console.log(data);
				setApiResponse(data);
				return data;
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				let response = await fetch(`${baseURL}all`);
				let data = await fetch(response.url).then(resp => {
					return resp.json();
				});
				console.log(data);
				setApiResponse(data);
				return data;
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		region ? getdata("region/", region) : getdata();
	}, [region]);

	useEffect(() => {
		country ? getdata("name/", country) : getdata();
	}, [country]);
	return (
		<>
			<Input />
			<div className="grid">
				{apiResponse &&
					apiResponse.map(item => (
						<Link
							to={{
								pathname: `/Grid/${item.name}`,
								aboutProps: {
									name: item.name,
								},
							}}
						>
							<Card props={item} />
						</Link>
					))}
			</div>
		</>
	);
};

export default Grid;
