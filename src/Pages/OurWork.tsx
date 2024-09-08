import React from "react";
import { motion } from "framer-motion";
import comercialComplex from "../assets/comercialComplex.jpg";
import modernOffice from "../assets/modernOffice.jpg";
import luxuryVillage from "../assets/luxvillage.jpeg";
import urbanPark from "../assets/urbanPark.jpg";
const projects = [
	{
		id: 1,
		title: "Modern Office Building",
		image: modernOffice,
		description:
			"A state-of-the-art office building with an eco-friendly design.",
	},
	{
		id: 2,
		title: "Luxury Residential Villa",
		image: luxuryVillage,
		description: "A luxurious villa designed with contemporary architecture.",
	},
	{
		id: 3,
		title: "Urban Park Redesign",
		image: urbanPark,
		description: "A revitalized urban park promoting green living.",
	},
	{
		id: 4,
		title: "Commercial Complex",
		image: comercialComplex,
		description: "A modern commercial complex for retail and offices.",
	},
];

const OurWork: React.FC = () => {
	return (
		<section className='px-8 py-16 bg-gray-100'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>Our Work</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className='bg-white rounded-lg shadow-md overflow-hidden'
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true, amount: 0.3 }}>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
								<p className='text-gray-600'>{project.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurWork;
