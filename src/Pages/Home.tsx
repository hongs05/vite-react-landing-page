// src/pages/Home.tsx
import React from "react";
import bridgeImage from "../assets/bridge.jpg";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
const Home: React.FC = () => {
	return (
		<main>
			<Hero></Hero>
			<Services></Services>
		</main>
	);
};

export default Home;
