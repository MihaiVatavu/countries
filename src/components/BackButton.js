import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<div className="button-wrapper">
			<Link to="/">
				<button className="back">
					<i class="fas fa-long-arrow-alt-left"></i> Back
				</button>
			</Link>
		</div>
	);
};

export default BackButton;
