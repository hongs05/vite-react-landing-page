import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";

const About: React.FC = () => {
	return (
		<div className='bg-gray-100 min-h-screen'>
			{/* Introduction Section */}
			<section className='container mx-auto py-20 px-4'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='text-4xl font-bold text-gray-800 mb-4'>About Us</h2>
					<p className='text-lg text-gray-600'>
						At Architecture Firm, we strive to design spaces that are not only
						aesthetically pleasing but also sustainable and functional. Our
						vision is to create a balance between form and function that
						enhances the environment and improves the quality of life for
						everyone.
					</p>
				</motion.div>

				{/* Values Section */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-2xl font-bold text-gray-800 mb-2'>
							Sustainability
						</h3>
						<p className='text-gray-600'>
							We are committed to sustainable architecture, using eco-friendly
							materials and energy-efficient solutions.
						</p>
					</div>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-2xl font-bold text-gray-800 mb-2'>
							Innovation
						</h3>
						<p className='text-gray-600'>
							We leverage cutting-edge technology and design principles to
							create spaces that inspire and innovate.
						</p>
					</div>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-2xl font-bold text-gray-800 mb-2'>
							Client Focus
						</h3>
						<p className='text-gray-600'>
							Our clients are at the center of our process. We work closely with
							them to ensure their vision is brought to life.
						</p>
					</div>
				</motion.div>
			</section>

			{/* Team Section */}
			<section className='container mx-auto py-20 px-4 bg-white'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='text-4xl font-bold text-gray-800 mb-4'>
						Meet Our Team
					</h2>
					<p className='text-lg text-gray-600'>
						Our team is composed of highly skilled architects, designers, and
						project managers who are passionate about creating beautiful and
						functional spaces.
					</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-3 gap-8'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}>
					{/* Replace with actual team members */}
					<div className='p-6 bg-gray-100 rounded-lg shadow-md text-center'>
						<img
							src={team3}
							alt='Team Member'
							className='w-32 h-32 rounded-full mx-auto mb-4'
						/>
						<h3 className='text-xl font-bold text-gray-800'>John Doe</h3>
						<p className='text-gray-600'>Lead Architect</p>
					</div>
					<div className='p-6 bg-gray-100 rounded-lg shadow-md text-center'>
						<img
							src={team2}
							alt='Team Member'
							className='w-32 h-32 rounded-full mx-auto mb-4'
						/>
						<h3 className='text-xl font-bold text-gray-800'>Jane Smith</h3>
						<p className='text-gray-600'>Project Manager</p>
					</div>
					<div className='p-6 bg-gray-100 rounded-lg shadow-md text-center'>
						<img
							src={team1}
							alt='Team Member'
							className='w-32 h-32 rounded-full mx-auto mb-4'
						/>
						<h3 className='text-xl font-bold text-gray-800'>Emily Johnson</h3>
						<p className='text-gray-600'>Interior Designer</p>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default About;
