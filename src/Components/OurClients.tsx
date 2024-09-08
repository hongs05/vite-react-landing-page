import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
const clients = [
	{ id: 1, name: "Real Estate Corp", logo: logo1 },
	{ id: 2, name: "Green Living", logo: logo2 },
	{ id: 3, name: "Urban Dev", logo: logo3 },
	{ id: 4, name: "MegaBuild", logo: logo4 },
];

const OurClients: React.FC = () => {
	return (
		<section className='px-8 py-16 bg-gray-100'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>Our Clients</h2>

				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					{clients.map((client) => (
						<motion.div
							key={client.id}
							className='flex justify-center items-center bg-gray-100 p-4 rounded-lg shadow-md'
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 300 }}>
							<img src={client.logo} alt={client.name} className='h-12' />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurClients;
