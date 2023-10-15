import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
		<main className="row">
			
			

			<section className="col left">
				
				

				<div className="contactTitle">
					<h2>Get In Touch</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
				</div>

				

				<div className="contactInfo">
					
					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-phone"></i>
						</div>
						<div className="details">
							<span>Phone</span>
							<span>+8801931183851</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-envelope"></i>
						</div>
						<div className="details">
							<span>Email</span>
							<span>sandwich.slinger@gmail.com</span>
						</div>
					</div>

					<div className="iconGroup">
						<div className="icon">
							<i className="fa-solid fa-location-dot"></i>
						</div>
						<div className="details">
							<span>Location</span>
							<span>Jamuna Future Park, Dhaka</span>
						</div>
					</div>

				</div>

				
			</section>

			

			<section className="col right">
				
				
				<form className="messageForm" action='https://formspree.io/f/myyqjlpv' method='POST'>
					
					<div className="inputGroup halfWidth">
						<input type="text" name="name" required />
						<label>Your Name</label>
					</div>

					<div className="inputGroup halfWidth">
						<input type="email" name="email" required/>
						<label>Email</label>
					</div>

					<div className="inputGroup fullWidth">
						<input type="text" name="subject" required />
						<label>Subject</label>
					</div>

					<div className="inputGroup fullWidth">
						<textarea required name='saysome'></textarea>
						<label>Say Something</label>
					</div>

					<div className="inputGroup fullWidth">
						<button>Send Message</button>
					</div>

				</form>

				
			</section>

			

		</main>
	</div>
  )
}

export default Contact
