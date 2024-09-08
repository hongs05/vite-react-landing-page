// src/pages/Services.tsx
import React from "react";

const services = [
	{
		title: "Residential Architecture",
		description:
			"Designing beautiful and functional living spaces tailored to your needs. We focus on creating sustainable and innovative homes that reflect your personality.",
		icon: "🏠",
	},
	{
		title: "Commercial Architecture",
		description:
			"Providing comprehensive design solutions for offices, retail spaces, and other commercial buildings. Our designs optimize functionality and aesthetics.",
		icon: "🏢",
	},
	{
		title: "Interior Design",
		description:
			"Creating bespoke interiors that combine style with practicality. Our interior design services cater to both residential and commercial spaces.",
		icon: "🛋️",
	},
	{
		title: "Landscape Architecture",
		description:
			"Designing outdoor spaces that blend beauty with sustainability. We specialize in creating landscapes that complement your architecture.",
		icon: "🌳",
	},
];

const Services: React.FC = () => {
	return (
		<main className='px-8 py-16 bg-gray-100'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>Our Services</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='flex flex-col items-center bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition duration-300'>
							<div className='text-6xl mb-4'>{service.icon}</div>
							<h3 className='text-2xl font-semibold mb-2'>{service.title}</h3>
							<p className='text-gray-600'>{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Services;
