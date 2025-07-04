import React from "react";
import styles from "../BlogPost.module.css";
import "./MobileEstimatesVsWordDocs.module.css";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

const MobileEstimatesVsWordDocs = () => (
	<>
		<NavBar />
		<main>
			<article className={styles.article}>
				<header className="hero">
					<div className="container hero-content">
						<div className="page-hero-text">
							<h1>Why Mobile Estimates Beat Word Docs in 2025</h1>
							<p className="subtitle">
								Faster approvals, fewer errors & happier clients
							</p>
						</div>
					</div>
				</header>

				<div className={styles.blogHeaderImage}>
					<img
						src="/assets/blog/mobile-estimates-vs-docs.png"
						alt="Mobile Estimates vs Doc hero image"
					/>
				</div>

				<div className={styles.articleBody}>
					<section>
						<h2>1. Win Jobs With Lightning‑Fast Turnaround</h2>
						<p>
							In 2025, homeowners and commercial clients expect
							quotes <strong>within minutes</strong>, not days.
							Generating an estimate on your phone while you are
							still on‑site means your proposal lands in the
							client’s inbox before your competitors even reach
							their truck.
						</p>
					</section>

					<section>
						<h2>2. Professional Look—No Manual Formatting</h2>
						<p>
							Mobile estimating tools offer branded templates,
							automatic totals, and PDF export in a tap. Word docs
							require copy‑pasting, manual table edits, and font
							tweaking—time you could spend winning the next job.
						</p>
					</section>

					<section>
						<h2>3. Real‑Time Sync & Collaboration</h2>
						<p>
							Need your office manager to double‑check numbers?
							Estimates created in Invoice Ways sync instantly
							with the cloud, so your team can review or edit from
							any device without emailing bulky attachments.
						</p>
					</section>

					{/* <section>
						<h2>4. Built‑in Pricing Accuracy</h2>
						<p>
							Item libraries, markup presets, and live tax rates
							remove spreadsheet errors that creep into Word. Less
							re‑typing means fewer embarrassing revisions and
							change orders.
						</p>
					</section> */}

					<section>
						<h2>4. One‑Tap Client Approval & Payment</h2>
						<p>
							Clients can sign inside the estimate and can pay a
							deposit immediately. No more printing, signing,
							scanning, and emailing Word attachments.
						</p>
					</section>

					<section>
						<h2>5. Seamless Record‑Keeping & Compliance</h2>
						<p>
							Mobile estimates are automatically filed alongside
							invoices, photos, and change orders, making tax time
							and warranty claims painless—and paper‑free.
						</p>
					</section>

					<footer className="cta">
						Ready to ditch Word docs?{" "}
						<a href="https://invoiceways.com/app">
							Try Invoice Ways
						</a>{" "}
						today and get
						<strong> 10 free estimates</strong>.
					</footer>
				</div>
			</article>
		</main>
		<Footer />
	</>
);

export default MobileEstimatesVsWordDocs;
