import React from "react";

const Contact: React.FC = () => {
	return (
		<main className='px-8 py-16 bg-white'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-8'>Contact Us</h2>
				<p className='text-center text-gray-700 mb-12'>
					Have a question or want to work with us? Reach out and let's create
					something amazing together!
				</p>

				{/* Contact Form */}
				<form className='space-y-6'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-700 mb-2'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500'
							placeholder='Your Name'
							required
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700 mb-2'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500'
							placeholder='yourname@example.com'
							required
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-700 mb-2'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500'
							placeholder='Your message...'
							required
						/>
					</div>

					<button type='submit' className='btn-primary w-full'>
						Send Message
					</button>
				</form>

				{/* Contact Information */}
				<div className='mt-16 text-center'>
					<h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>
					<p className='text-gray-700'>Phone: +1 (555) 123-4567</p>
					<p className='text-gray-700'>Email: info@architecturefirm.com</p>
					<p className='text-gray-700'>
						Address: 123 Main Street, Suite 101, City, State
					</p>
				</div>
			</div>
		</main>
	);
};

export default Contact;
