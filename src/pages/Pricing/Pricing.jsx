// src/pages/PricingPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Pricing.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";

export default function PricingPage() {
	return (
		<>
			<Helmet>
				<title>Pricing – InvoiceWays</title>
				<meta
					name="description"
					content="Simple, affordable plans. Upgrade to unlimited invoices and estimates for just $6.99 / month."
				/>
			</Helmet>

			<NavBar />

			{/* ---------- HERO ---------- */}
			<header className="hero">
				<div className="container hero-content">
					<div className="page-hero-text">
						<h1>Transparent Pricing</h1>
						<p>
							Start free, scale when you’re ready. No hidden
							fees—cancel anytime.
						</p>
					</div>
				</div>
			</header>

			{/* ---------- PRICING CARDS ---------- */}
			<section className="section light">
				<h2 className={styles.heading}>Pick the plan that fits</h2>

				<div className={`container ${styles.cards}`}>
					{/* Starter */}
					<div className={styles.card}>
						<h3 className={styles.title}>Starter</h3>
						<p className={styles.price}>
							<span className={styles.figure}>$0</span>
							<span className={styles.period}>/mo</span>
						</p>
						<ul className={styles.features}>
							<li>10 invoices &amp; 10 estimates / month</li>
							<li>Unlimited customers &amp; projects</li>
							<li>Basic PDF styling</li>
						</ul>
						<a
							href="https://app.invoiceways.com"
							className={styles.btn}
						>
							Get Started
						</a>
					</div>

					{/* Pro (highlight) */}
					<div className={`${styles.card} ${styles.popular}`}>
						<div className={styles.badge}>Most&nbsp;Popular</div>
						<h3 className={styles.title}>Pro</h3>
						<p className={styles.price}>
							<span className={styles.figure}>$6.99</span>
							<span className={styles.period}>/mo</span>
						</p>
						<ul className={styles.features}>
							<li>
								<strong>Unlimited</strong> invoices &amp;
								estimates
							</li>
							<li>No watermarks on PDFs</li>
							<li>Advanced PDF styles</li>
							<li>Email &amp; chat support</li>
						</ul>
						<a
							href="https://app.invoiceways.com/subscribe"
							className={`${styles.btn} ${styles.btnPrimary}`}
						>
							Start Free Trial
						</a>
					</div>

					{/* Annual */}
					<div className={styles.card}>
						<h3 className={styles.title}>Pro&nbsp;Annual</h3>
						<p className={styles.price}>
							<span className={styles.figure}>$69</span>
							<span className={styles.period}>/yr</span>
						</p>
						<ul className={styles.features}>
							<li>Save 2&nbsp;months (18%)</li>
							<li>Everything in Pro</li>
							<li>Priority support</li>
						</ul>
						<a
							href="https://app.invoiceways.com/subscribe?period=annual"
							className={styles.btn}
						>
							Save Now
						</a>
					</div>
				</div>
			</section>

			{/* ---------- CTA ---------- */}
			<section className="section cta">
				<div className="features">
					<div>
						<h2>14-Day Free Trial on&nbsp;Pro</h2>
						<p>
							No credit card required – try every feature today.
						</p>
					</div>
					<a
						href="https://app.invoiceways.com/subscribe"
						className={`${styles.btnPrimary} ${styles.btnCta}`}
					>
						Start Trial
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
