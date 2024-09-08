import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<motion.header
			className='sticky bg-white shadow-bg'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 75 }}>
			<nav className='container mx-auto flex justify-between items-rigth py-6 px-8'>
				<div className='text-2xl font-bold text-gray-1200'>
					<Link to='/'>🏛️ Eco-Buildings</Link>
				</div>
				<ul className='flex space-x-6 text-lg font-medium'>
					<li>
						<Link to='/' className='hover:text-red-500 transition'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' className='hover:text-red-500 transition'>
							About
						</Link>
					</li>
					<li>
						<Link to='/contact' className='hover:text-red-500 transition'>
							Contact
						</Link>
					</li>
					{/* <li>
						<Link to='/ourWork' className='hover:text-red-500 transition'>
							OurWork
						</Link>
					</li> */}
					{/* Add more links as needed */}
				</ul>
			</nav>
		</motion.header>
	);
};

export default Header;
