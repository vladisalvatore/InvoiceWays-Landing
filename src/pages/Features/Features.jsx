import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Features.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Features() {
	return (
		<>
			<Helmet>
				<title>Features – InvoiceWays</title>
				<meta
					name="description"
					content="Explore every tool that helps contractors create invoices, track projects and get paid faster."
				/>
			</Helmet>

			<NavBar />

			{/* ---------- HERO ---------- */}
			<header className="hero">
				<div className="container hero-content">
					<div className="page-hero-text">
						<h1>
							Everything You Need&nbsp;&mdash; Nothing You Don’t
						</h1>
						<p>
							From quick-fire estimates to detailed project
							tracking, InvoiceWays keeps your business moving and
							your cash-flow healthy.
						</p>
					</div>
				</div>
			</header>

			{/* ---------- FEATURE GRID ---------- */}
			<section className="section light">
				<h2 className={styles.heading}>Core Features</h2>

				<div className="container">
					<div className={styles.cards}>
						{/* Each card */}
						<FeatureCard
							title="Fast Estimates"
							img="assets/EstimatePDF.png"
							text="Create polished estimates on-site and send to clients in seconds."
						/>
						<FeatureCard
							title="Professional Invoices"
							img="assets/InvoiceDS.png"
							text="Generate branded PDFs and track payment status at a glance."
						/>
						<FeatureCard
							title="Project Tracking"
							img="assets/Dashboard.png"
							text="Monitor active jobs, profits and timelines from one dashboard."
						/>
						<FeatureCard
							title="Customer Manager"
							img="assets/Customers.png"
							text="Store client details and view every invoice &amp; estimate in context."
						/>
						<FeatureCard
							title="Styled Templates"
							img="assets/Styles.png"
							text="Choose from multiple themes to match your brand."
						/>
						<FeatureCard
							title="Mobile &amp; Web Sync"
							img="assets/Sync.png"
							text="Work anywhere—changes sync instantly across devices."
						/>
					</div>
				</div>
			</section>

			{/* ---------- CTA ---------- */}
			<section className="section cta">
				<div className="features">
					<div>
						<h2>Ready to try InvoiceWays?</h2>
						<p>
							Sign up free and get 10 invoices &amp; 10 estimates
							on us.
						</p>
					</div>
					<a
						href="https://app.invoiceways.com"
						className={`${styles.btnPrimary} ${styles.btnCta}`}
					>
						Get Started
					</a>
				</div>
			</section>

			{/* ---------- FOOTER ---------- */}
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

/* ----- small helper component ----- */
function FeatureCard({ title, img, text }) {
	return (
		<div className={styles.card}>
			<img src={img} alt={title} className={styles.cardImg} />
			<h3 className={styles.cardTitle}>{title}</h3>
			<p className={styles.cardText}>{text}</p>
		</div>
	);
}
