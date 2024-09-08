import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.section
			className='contact'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1, delay: 0.9 }}>
			<h2>Contact Us</h2>
			<p>Reach out to us for your next architectural project.</p>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='cta-button'>
				Get in Touch
			</motion.button>
		</motion.section>
	);
};

export default Contact;
