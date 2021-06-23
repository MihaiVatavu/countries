import React from "react";
const Card = ({ props }) => {
	const style = {
		backgroundImage: `url(${props.flag})`,
		backgroundSize: "cover",
	};

	const population = props.population.toLocaleString("en-UK");

	return (
		<div className="card" key={props.name}>
			<div className=" flag" style={style}></div>
			<div className="details">
				<h2>{props.name}</h2>
				<p className="capital">
					<h4>Capital : </h4>
					{props.capital}
				</p>
				<p className="region">
					<h4>Region : </h4>
					{props.region}
				</p>
				<p className="population">
					<h4>Population :</h4>
					{population}
				</p>
			</div>
		</div>
	);
};

export default Card;
