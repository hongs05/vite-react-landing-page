import { motion } from "framer-motion";
import bridgeImage from "../assets/bridge.jpg";
import { useNavigate } from "react-router-dom";
const Hero: React.FC = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/about"); // Redirects to the /about page
	};
	return (
		<motion.section
			className='hero'
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			style={{ backgroundImage: `url(${bridgeImage})` }}>
			<div className='hero-content'>
				<motion.h1
					className='text-6xl font-bold text-white z-10'
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					We build dreams into reality.
				</motion.h1>
				<motion.p
					className='text-2xl text-white mt-4 z-10'
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}>
					Unforgettable Events, Just for You
				</motion.p>
				<motion.button
					onClick={handleButtonClick}
					className='mt-8 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-700 z-10 shadow-lg'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					Learn More
				</motion.button>
			</div>
		</motion.section>
	);
};

export default Hero;
