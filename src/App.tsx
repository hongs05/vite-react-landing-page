// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import bridgeImage from "./assets/bridge.jpg";
import Contact from "./Pages/Contact";
const App: React.FC = () => {
	return (
		<Router>
			<div>
				{" "}
				{/* Ensures full height */}
				<Header />
				<div className='flex-grow'>
					{" "}
					{/* Ensures the content fills the remaining space */}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />

						{/* Add other routes as needed */}
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
