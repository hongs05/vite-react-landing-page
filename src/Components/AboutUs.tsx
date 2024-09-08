import { motion } from "framer-motion";

const AboutUs = () => {
	return (
		<motion.section
			className='about-us'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}>
			<h2>About Us</h2>
			<p>
				We are a leading architecture firm committed to designing functional and
				beautiful spaces that meet the unique needs of our clients.
			</p>
		</motion.section>
	);
};

export default AboutUs;
