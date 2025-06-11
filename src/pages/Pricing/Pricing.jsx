// src/pages/PricingPage.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Pricing.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";

export default function PricingPage() {
	return (
		<>
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
							<li>10 invoices &amp; 10 estimates</li>
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
							{/* <li>Advanced PDF styles</li> */}
							{/* <li>Email &amp; chat support</li> */}
						</ul>
						<a
							href="https://app.invoiceways.com/subscribe"
							className={`${styles.btn} ${styles.btnPrimary}`}
						>
							Start Free Trial
						</a>
					</div>

					{/* Annual */}
					{/* <div className={styles.card}>
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
					</div> */}
				</div>
			</section>

			{/* ---------- CTA ---------- */}
			<section className="bottom-section cta">
				<div className="bottom-features">
					<div>
						<h2>10 Free Estimates and Invoices</h2>
						<p>
							No credit card required – try every feature today.
						</p>
					</div>
					<a
						href="https://app.invoiceways.com/app"
						className="btn-primary btn-cta"
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

function PricingComponent() {
	return (
		<main className={styles.container}>
			{/* --- SEO meta --- */}
			<Helmet>
				<title>Pricing | Invoice Ways</title>
				<meta
					name="description"
					content="Get unlimited invoicing, estimates, and project tracking for only $6.99 per month. Start free with 10 invoices & 10 estimates on Invoice Ways."
				/>
				<link rel="canonical" href="https://invoiceways.com/pricing" />
			</Helmet>

			{/* --- Heading --- */}
			<header className={styles.header}>
				<h1 className={styles.title}>Simple, Honest Pricing</h1>
				<p className={styles.subtitle}>
					Start free with{" "}
					<strong>10 invoices&nbsp;&amp;&nbsp;10 estimates</strong>,
					then unlock unlimited features for one low monthly rate.
				</p>
			</header>

			{/* --- Plan Card --- */}
			<section className={styles.card}>
				<h2 className={styles.planName}>Pro Plan</h2>
				<p className={styles.price}>
					<span className={styles.currency}>$</span>6.99
					<span className={styles.period}>/mo</span>
				</p>

				<ul className={styles.features}>
					<li>Unlimited invoices &amp; estimates</li>
					<li>Accept card &amp; ACH payments*</li>
					<li>Real-time project &amp; revenue dashboard</li>
					<li>Branded PDF templates</li>
					<li>Secure cloud backup</li>
					<li>Priority email support</li>
				</ul>

				<a
					href="https://app.invoiceways.com/register"
					className={styles.cta}
				>
					Start Free – Upgrade Anytime
				</a>

				<p className={styles.note}>* Payment processing fees apply</p>
			</section>
		</main>
	);
}
