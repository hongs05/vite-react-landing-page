import React from "react";
import { motion } from "framer-motion";
import bridge from "../assets/bridge.jpg";
import office from "../assets/office.jpg";
import garden from "../assets/garden.jpeg";

const projects = [
	{
		id: 1,
		title: "Modern Office Building",
		image: office, // Use require to import the image
		description:
			"A state-of-the-art office building with an eco-friendly design.",
	},
	{
		id: 2,
		title: "Luxury Residential Villa",
		image: bridge,
		description: "A luxurious villa designed with contemporary architecture.",
	},
	{
		id: 3,
		title: "Urban Park Redesign",
		image: garden,
		description: "A revitalized urban park promoting green living.",
	},
];

const FeaturedProjects: React.FC = () => {
	return (
		<section className='px-8 py-16 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>
					Featured Projects
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className='bg-gray-100 rounded-lg shadow-md overflow-hidden'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: project.id * 0.1 }}
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

export default FeaturedProjects;
