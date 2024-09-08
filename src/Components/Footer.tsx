import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className='bg-gray-900 text-white py-6 text-center mt-10'>
			<div className='container mx-auto'>
				<p className='mb-2'>
					&copy; {new Date().getFullYear()} FirmName. All rights reserved.
				</p>
				<p className='text-sm'>Built with passion by our team.</p>
			</div>
		</footer>
	);
};

export default Footer;
