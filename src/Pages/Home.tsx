import React from "react";

import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import OurClients from "../Components/OurClients";
const Home: React.FC = () => {
	return (
		<main>
			<Hero></Hero>
			<Services></Services>
			<Projects></Projects>
			<OurClients></OurClients>
		</main>
	);
};

export default Home;
