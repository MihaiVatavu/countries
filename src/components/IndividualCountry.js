import { useState, useEffect } from "react";
import BackButton from "./BackButton";

const IndividualCountry = props => {
	const [apiResponse, setApiResponse] = useState("");

	const baseURL = "https://restcountries.eu/rest/v2/";

	useEffect(() => {
		const getdata = async () => {
			try {
				let response = await fetch(
					`${baseURL}name/${props.location.aboutProps.name}`
				);
				console.log(response);
				let data = await fetch(response.url).then(resp => {
					return resp.json();
				});
				console.log(data);
				setApiResponse(data);
			} catch {}
		};
		getdata();
	}, [props.location.aboutProps.name]);
	console.log(apiResponse);

	const returnUi = () => {
		return (
			<>
				<BackButton />
				<div className="country-wrapper">
					<section className="flag">
						<img src={apiResponse[0].flag} alt="flag"></img>
					</section>
					<section className="info-wrapper">
						<h2>{apiResponse[0].name}</h2>
						<div className="info">
							<div
								className=" 
					One"
							>
								<p>
									<span className="head">Native Name : </span>
									{apiResponse[0].nativeName}
								</p>
								<p>
									<span className="head">Population : </span>
									{apiResponse[0].population.toLocaleString("en-UK")}
								</p>
								<p>
									<span className="head">Region : </span>
									{apiResponse[0].region}
								</p>
								<p>
									<span className="head">Sub Region : </span>
									{apiResponse[0].subregion}
								</p>
								<p>
									<span className="head">Capital : </span>
									{apiResponse[0].capital}
								</p>
							</div>
							<div className="Two">
								<p>
									<span className="head">Top Level Domain : </span>
									{apiResponse[0].topLevelDomain}
								</p>
								<p>
									<span className="head">Currencies : </span>
									{apiResponse[0].currencies[0].name}
								</p>
								<p>
									<span className="head">Languages : </span>
									{apiResponse[0].languages.map(lang => {
										return (
											<p key={lang.name} className="lang">
												{lang.name} ,
											</p>
										);
									})}
								</p>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	};

	return <div>{apiResponse ? returnUi() : <p>Loading</p>}</div>;
};

export default IndividualCountry;
