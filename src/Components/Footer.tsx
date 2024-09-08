import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-900 text-white py-8'>
			<div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
				<div className='mb-4 md:mb-0'>
					<h3 className='text-xl font-bold'> 🏛️ Eco-Buildings</h3>
					<p className='text-gray-400'>
						© 2024 Architecture Firm. All rights reserved.
					</p>
				</div>
				<div className='flex space-x-4'>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-blue-500'>
						<FontAwesomeIcon icon={faFacebookF} size='lg' />
					</a>
					<a
						href='https://twitter.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-blue-400'>
						<FontAwesomeIcon icon={faTwitter} size='lg' />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-pink-500'>
						<FontAwesomeIcon icon={faInstagram} size='lg' />
					</a>
					<a
						href='https://linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white hover:text-blue-600'>
						<FontAwesomeIcon icon={faLinkedinIn} size='lg' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
