import React from "react";
import styles from "./AccountDeletion.module.css";
import NavBar from "../../components/NavBar/NavBar";

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

const AccountDeletion = () => {
	return (
		<>
			<NavBar />
			<main>
				<h1>Account Deletion</h1>
				<section>
					<h3>Account Deletion Request</h3>
					<p>
						If you have created an Invoice Ways account and would
						like to delete your account and associated personal
						data, you may request deletion by contacting us at{" "}
						<a href="mailto:contact@lux-it-solutions.com">
							contact@lux-it-solutions.com{" "}
						</a>
						.
					</p>
					<p>
						To submit a deletion request, please email{" "}
						<a href="mailto:contact@lux-it-solutions.com">
							contact@lux-it-solutions.com
						</a>{" "}
						from the email address associated with your account and
						include the subject line:
					</p>

					<h4>Account Deletion Request</h4>
					<p>In your message, please include:</p>
					<ul>
						<li>Your full name</li>
						<li>
							The email address associated with your Invoice Ways
							account
						</li>
						<li>
							A brief statement that you want your account deleted
						</li>
						<p>
							We may need to verify your identity before
							processing your request in order to protect your
							account and personal information.
						</p>
					</ul>
					<h4>What Happens When You Request Deletion</h4>
					<p>
						When your account deletion request is approved and
						processed, we will delete or anonymize the personal
						information associated with your account, except for
						information we are required or permitted to retain for
						legal, security, fraud prevention, tax, accounting, or
						compliance purposes.
					</p>
					<h4>Data That May Be Deleted</h4>
					<p>
						Depending on how you use Invoice Ways, account deletion
						may include removal of:
					</p>
					<ul>
						<li>Your account profile information</li>
						<li>
							Saved invoices, customers, or business details
							associated with your account
						</li>
						<li>
							Other account-related data stored in our systems
						</li>
					</ul>
					<h4>Data That May Be Retained</h4>
					<p>
						Certain information may be retained where necessary to:
					</p>
					<ul>
						<li>Comply with legal obligations</li>
						<li>Enforce our agreements</li>
						<li>Resolve disputes</li>
						<li>Prevent fraud or abuse</li>
						<li>
							Maintain security, backup, and audit records for a
							limited period
						</li>
					</ul>
					<p>
						Any retained information will be handled in accordance
						with applicable law.
					</p>
					<h4>Processing Time</h4>
					<p>
						We will review and process verified account deletion
						requests within a reasonable timeframe. In some cases,
						backup or archived copies may take additional time to be
						fully removed from our systems.
					</p>
					<h4>No Need to Reinstall the App</h4>
					<p>
						You do not need to reinstall the app to request account
						deletion. You may submit your request directly through
						the contact method listed above.
					</p>
				</section>
			</main>
		</>
	);
};

export default AccountDeletion;
