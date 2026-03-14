import React from "react";
import NavBar from "../components/NavBar/NavBar";

const userAccountInformation = [
	"Username",
	"Password",
	"Full Name",
	"Business",
	"Name",
	"Email Address",
	"Phone Number",
	"Business Address",
	"City",
	"State",
	"Zip Code",
	"OAuth Provider (oauth_provider, e.g., Google)",
	"OAuth ID",
	"Profile Image",
	"Business Logo",
];

const subscriptionInformation = ["User ID", "Subscription Status"];

const Privacy = () => {
	return (
		<>
			<NavBar />
			<main class="legal">
				<h1>Privacy Policy</h1>
				<section>
					<h3>1. Introduction</h3>
					<p>
						Welcome to Invoice Ways ("we," "us," or "our"), an
						application developed by Lux IT Solutions. This Privacy
						Policy outlines how we collect, use, and share
						information from users ("you" or "users") of our app. By
						using Invoice Ways, you agree to the terms of this
						Privacy Policy.
					</p>
				</section>
				<section>
					<h3>2. Information We Collect</h3>

					<p>We collect the following information from you:</p>
					<h4>User Account Information:</h4>
					<ul>
						{userAccountInformation.map((item) => (
							<li>{item}</li>
						))}
					</ul>
					<h4>Subscription Information:</h4>
					<ul>
						{subscriptionInformation.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</section>
				<section>
					<h3>3. How We Use Your Information</h3>
					<p>We use your information for the following purposes:</p>

					<ul>
						<li>
							Account Creation and Management: To create, manage,
							and maintain your user account.
						</li>
						<li>
							Authentication: To authenticate your identity when
							you log in to Invoice Ways.
						</li>
						<li>
							Service Provision: To provide you with the features
							and functionalities of Invoice Ways.
						</li>
						<li>
							Payment Processing: To process subscription payments
							through Stripe.
						</li>
						<li>
							Communication: To communicate with you regarding
							your account, subscriptions, and updates to our app.
						</li>
						<li>
							Customer Support: To provide customer support and
							address your inquiries.
						</li>
						<li>
							App Improvement: To analyze usage patterns and
							improve the functionality and user experience of
							Invoice Ways.
						</li>
						<li>
							Security: To ensure the security and integrity of
							our app and protect against fraud.
						</li>
					</ul>
				</section>

				<section>
					<h3>4. Information Sharing</h3>
					<p>
						We share your information with the following third-party
						partners:
					</p>

					<ul>
						<li>
							Google: For user authentication via Google OAuth.
						</li>
						<li>
							Stripe: For processing subscription payments and
							managing subscriptions.
						</li>
					</ul>

					<p>
						We do not sell or rent your personal information to
						third parties for marketing purposes. We will only share
						your information with third parties as described in this
						Privacy Policy or with your explicit consent.
					</p>
				</section>
				<section>
					<h3>5. Data Security</h3>
					<p>
						We implement security measures, including HTTPS
						encryption and secure server infrastructure, to protect
						your information from unauthorized access, use, or
						disclosure. However, please be aware that no method of
						transmission over the internet or method of electronic
						storage is 100% secure.
					</p>
				</section>
				<section>
					<h3>6. Data Retention</h3>
					<p>
						We retain your personal information for as long as
						necessary to provide you with our services, comply with
						legal obligations, resolve disputes, and enforce our
						agreements. Payment data is retained for 7 years due to
						legal requirements, while account data is retained as
						long as your account is active.
					</p>
				</section>
				<section>
					<h3>7. Your Rights</h3>
					<p>
						You have the following rights regarding your personal
						information:
					</p>
					<ul>
						<li>
							Access: You can request access to the personal
							information we hold about you.
						</li>
						<li>
							Correction: You can request that we correct any
							inaccurate or incomplete information.
						</li>
						<li>
							Deletion: You can request that we delete your
							personal information, subject to certain exceptions.
						</li>
						<li>
							Objection: You can object to our processing of your
							personal information.
						</li>
						<li>
							Data Portability: You can request a copy of your
							personal data in a structured, commonly used, and
							machine-readable format.
						</li>
					</ul>
					<p>
						To exercise these rights, please contact us at the email
						address provided below.
					</p>
				</section>

				<section>
					<h3>8. Children's Privacy</h3>
					<p>
						Invoice Ways is not intended for children under the age
						of 18. We do not knowingly collect personal information
						from children under this age. If we become aware that we
						have collected personal information from a child under
						this age, we will take steps to delete it.
					</p>
				</section>
				<section>
					<h3>9. Changes to This Privacy Policy</h3>
					<p>
						We may update this Privacy Policy from time to time. We
						will notify you of any changes by posting the new
						Privacy Policy on this page. This policy is reviewed
						annually.
					</p>
				</section>
				<section>
					<h3>10. Contact Us</h3>
					<p>
						If you have any questions about this Privacy Policy,
						please contact us at:
					</p>
					<a href="mailto:contact@lux-it-solutions.com">
						contact@lux-it-solutions.com
					</a>
					<p>Lux IT Solutions</p>
					<a href="https://lux-it-solutions.com">
						lux-it-solutions.com
					</a>
				</section>
			</main>
		</>
	);
};

export default Privacy;
