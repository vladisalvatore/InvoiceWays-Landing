// src/pages/LandingPage.jsx
import React from "react";
import NavBar from "../components/NavBar/NavBar";

export default function Landing() {
	return (
		<>
			<NavBar />
			<header className="hero">
				{/* <div className="container nav">
					<div className="logo">
						INVOICE WAYS
						<br />
						<span>by Lux IT Solutions</span>
					</div>
					<a href="https://app.invoiceways.com" className="btn-login">
						Login
					</a>
				</div> */}

				<div className="container hero-content">
					<div className="hero-text">
						<h1>Invoices Made Simple</h1>
						<p>
							Create professional invoices and estimates for free,
							manage customers, and track projects — all from one
							simple dashboard.
						</p>

						<div className="app-buttons">
							<a href="https://apps.apple.com/us/app/invoice-ways/id6743766415">
								<img
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
									alt="App Store"
									style={{ height: 45 }}
								/>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.invoicewaysmobile">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
									alt="Google Play"
									style={{ height: 45 }}
								/>
							</a>
						</div>

						<div className="social-icons">
							<a href="https://www.youtube.com/channel/UCXc6bpF8ad-0diXJrlQD2-w">
								<i className="fab fa-youtube fa-2x" />
							</a>
							<a href="https://www.instagram.com/invoiceways">
								<i className="fab fa-instagram fa-2x" />
							</a>
							{/* <a href="#"><i className="fab fa-twitter fa-2x" /></a> */}
						</div>
					</div>

					<div className="hero-image">
						<img src="assets/InvoiceDS.png" alt="App Screenshot" />
					</div>
				</div>
			</header>

			{/* ---------- Section: Track / Create / Build ---------- */}
			<section className="section light">
				<h2>Track Projects, Create Invoices, Build Estimates</h2>
				<p>
					InvoiceWays is the ultimate tool for contractors. Track
					projects, create professional invoices, and generate
					accurate estimates—all in one intuitive app. Sign up free
					and upgrade to watermark-free documents for just
					$6.99/month.
				</p>
			</section>

			{/* ---------- Section: Customers (dark) ---------- */}
			<section className="section dark">
				<div className="container split">
					<img src="assets/Customers.png" alt="Customers" />
					<div>
						<h2>All Customers in One Place</h2>
						<p>
							The Customers module helps you efficiently manage
							client information and related transactions. It
							centralizes key actions for each customer, making it
							easy to stay organized and responsive.
						</p>
						<ul>
							<li>
								<strong>Customer Details:</strong> View and
								manage customer profiles, including addresses.
							</li>
							<li>
								<strong>Invoices:</strong> Create and track
								invoices linked to specific customer addresses.
							</li>
							<li>
								<strong>Estimates:</strong> Generate and manage
								estimates for each customer to streamline your
								quoting process.
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ---------- Section: Dashboard (light) ---------- */}
			<section className="section light">
				<div className="container split">
					<div>
						<h2>Your Business at a Glance</h2>
						<p>
							The dashboard gives a quick view of project
							performance and finances, showing profits, paid and
							total invoices, and estimate data for better
							insights.
						</p>
						<ul>
							<li>
								<strong>Projects &amp; Profits:</strong> View
								all active and completed projects alongside
								total profits generated to monitor overall
								success.
							</li>
							<li>
								<strong>Invoices:</strong> Track total invoices
								issued and the amount already paid to stay on
								top of your cash flow.
							</li>
							<li>
								<strong>Estimates:</strong> Analyze both the
								total number of estimates and invoices combined,
								as well as the average estimate value for better
								forecasting and planning.
							</li>
						</ul>
					</div>
					<img src="assets/Dashboard.png" alt="Dashboard" />
				</div>
			</section>

			{/* ---------- Section: Estimate PDF (dark) ---------- */}
			<section className="section dark">
				<div className="container split">
					<img src="assets/EstimatePDF.png" alt="PDF Generator" />
					<div>
						<h2>Professional Estimates in Minutes</h2>
						<p>
							Easily generate professional PDF versions of your
							invoices and estimates with just a few clicks. Based
							on your selected style, the app creates detailed,
							client-ready documents that streamline your billing
							process.
						</p>
						<ul>
							<li>
								<strong>Styled PDF Generator:</strong>{" "}
								Automatically create polished PDFs with itemized
								lines, business info, and customer details, all
								formatted to match your selected style.
							</li>
							<li>
								<strong>Instant Download:</strong> Download
								documents immediately for your records or
								offline use.
							</li>
							<li>
								<strong>Easy Sharing:</strong> Save and send
								PDFs to clients through your preferred email or
								messaging platform outside the app.
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ---------- Section: Styles (light) ---------- */}
			<section className="section light">
				<div className="container split">
					<div>
						<h2>Different Styles for Different Jobs</h2>
						<p>
							Customize the look and feel of your documents with
							flexible style options. This feature lets you tailor
							invoices and estimates to match your brand and
							enhance professionalism when sending them to
							customers.
						</p>
						<ul>
							<li>
								<strong>Template Selection:</strong> Choose from
								multiple professionally designed styles to suit
								your business image.
							</li>
							<li>
								<strong>Branding Options:</strong> Add your logo
								and company details for a personalized touch.
							</li>
							<li>
								<strong>Preview Before Sending:</strong> See how
								your invoice or estimate will appear before
								finalizing and sending it to the customer.
							</li>
						</ul>
					</div>
					<img src="assets/Styles.png" alt="Styled Document" />
				</div>
			</section>

			{/* ---------- CTA Section ---------- */}
			<section className="section cta">
				<div className="features">
					<div>
						<h2>Create Invoices Instantly</h2>
						<p>Generate and send invoices in a few taps.</p>
					</div>
					<div>
						<h2>Track Payments</h2>
						<p>See paid, pending, and overdue invoices.</p>
					</div>
					<div>
						<h2>Client Management</h2>
						<p>Keep all contacts organized.</p>
					</div>
				</div>
			</section>

			{/* ---------- Footer ---------- */}
			<footer>
				<div className="container footer-content">
					<div className="footer-links">
						<a href="https://app.invoiceways.com/privacy">
							Privacy Policy
						</a>
						<a href="#">Terms of Service</a>
					</div>
					<p>© 2025 Lux IT Solutions. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}
