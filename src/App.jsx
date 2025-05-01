
import React from 'react';
import './components/products.css';

function ProductsPage() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "InvoiceWays",
    "description": "InvoiceWays helps contractors track projects, create professional invoices, and build accurate estimates. Streamline your contracting business with our user-friendly app. Sign up free today!",
  };

  return (
    <div className="products-page">
      {/* Schema.org Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <header className="header">
  <div className="container header-inner">
    <h1 className="logo">
      <a href="/">InvoiceWays</a>
    </h1>
    <nav className="nav">
      <a href="https://app.invoiceways.com" className="btn btn-login">Login</a>
    </nav>
  </div>
</header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">InvoiceWays</h1>
          <p className="hero-subtitle">Empower Your Contracting Business</p>
          <a href="https://app.invoiceways.com" className="btn btn-signup">Sign Up Free</a>
          <div className="hero-media">
            <img src="/invoiceWays.png" alt="InvoiceWays Demo" className="hero-video" />
          </div>
        </div>
      </section>

      {/* About InvoiceWays Section */}
      <section className="about">
        <div className="container">
          <h2>Track Projects, Create Invoices, Build Estimates</h2>
          <p>
            InvoiceWays is the ultimate tool for contractors. Track projects, create professional invoices, and generate accurate estimates—all in one intuitive app. Sign up free and upgrade to watermark-free documents for just $6.99/month.
          </p>
          <div className="feature-grid">
            {[
              {
                title: "Project Tracking",
                desc: "Effortlessly monitor project progress and earnings.",
                screenshot: "/Projects.png",
              },
              {
                title: "Centralized Customer Management",
                desc: "Keep all your clients organized, view their history, and manage accounts effortlessly from one place.",
                screenshot: "/Customers.png",
              },
              {
                title: "Invoice Creation",
                desc: "Craft sleek, professional invoices in seconds.",
                screenshot: "/Invoices.png",
              },
              {
                title: "Estimate Building",
                desc: "Build accurate estimates to win more jobs.",
                screenshot: "/Estimates.png",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-item">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <img
                  src={feature.screenshot}
                  alt={`${feature.title} screenshot`}
                  className="feature-screenshot"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started">
        <div className="container">
          <h2>Get Started Today!</h2>
          <p>
            Take control of your contracting business with InvoiceWays. Sign up free to streamline project tracking, invoicing, and estimating.
          </p>
          <a href="https://app.invoiceways.com" className="btn btn-signup">Sign Up Free</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Contact Us</p>
          <p>Email: <a href="mailto:contact@lux-it-solutions.com" >contact@lux-it-solutions.com</a></p>
          <p>© 2025 Lux IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Error Boundary to catch rendering issues
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ProductsPageWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <ProductsPage />
    </ErrorBoundary>
  );
}