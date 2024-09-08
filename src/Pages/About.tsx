// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
	return (
		<main className='container mx-auto px-6 py-20'>
			<section className='max-w-3xl mx-auto text-center'>
				<h2 className='text-4xl font-bold text-gray-800 mb-6'>About Us</h2>
				<p className='text-lg text-gray-600 mb-6'>
					We are a leading architecture firm committed to designing functional
					and beautiful spaces that meet the unique needs of our clients.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<h3 className='text-2xl font-semibold text-gray-700 mb-4'>
							Our Vision
						</h3>
						<p className='text-gray-500'>
							To create innovative spaces that inspire and improve quality of
							life.
						</p>
					</div>
					<div>
						<h3 className='text-2xl font-semibold text-gray-700 mb-4'>
							Our Mission
						</h3>
						<p className='text-gray-500'>
							To blend art, technology, and sustainability in all our projects.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
