import { motion } from "framer-motion";

const Projects = () => {
	return (
		<motion.section
			className='projects'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1, delay: 0.6 }}>
			<h2>Our Projects</h2>
			<div className='project-gallery'>
				{/* Add project images or cards here */}
			</div>
		</motion.section>
	);
};

export default Projects;
