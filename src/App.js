import Grid from "./components/Grid";
import RegionContext from "./context/RegionContext.js";
import CountryContext from "./context/CountryContext.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndividualCountry from "./components/IndividualCountry";
import Bar from "./components/Bar";

function App() {
	return (
		<div className="main">
			<Router>
				<CountryContext>
					<RegionContext>
						<Bar />
						<Switch>
							<Route exact path="/" component={Grid} />
							<Route path="/Grid/:id" component={IndividualCountry} />
						</Switch>
					</RegionContext>
				</CountryContext>
			</Router>
		</div>
	);
}

export default App;
