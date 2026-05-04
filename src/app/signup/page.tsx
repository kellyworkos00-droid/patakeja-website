import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import AuthShowcase from "../../components/auth/AuthShowcase";

export default function SignupPage() {
  return (
    <main className="auth-page">
      <section className="auth-layout">
        <AuthShowcase
          kicker="Start Your Journey"
          title="Create your Patakeja account."
          description="Join thousands of tenants and landlords using secure escrow to rent with confidence."
          imageSrc="/signup.png"
        />

        <section className="auth-panel">
          <div className="auth-panel-head">
            <Link href="/" className="auth-back-link">
              Back to onboarding
            </Link>
            <div className="auth-brand">
              <Image
                src="/patakeja-logo.png"
                alt="PataKeja"
                width={148}
                height={38}
              />
              <span className="auth-chip">New Account</span>
            </div>
          </div>

          <header className="auth-header">
            <p className="auth-welcome">Get started</p>
            <h2>Create your account</h2>
            <p>Set up your profile to explore verified homes instantly.</p>
          </header>

          <div className="auth-clerk-shell">
            <SignUp
              path="/signup"
              routing="path"
              signInUrl="/login"
              forceRedirectUrl="/"
              fallbackRedirectUrl="/"
              appearance={{
                elements: {
                  rootBox: "auth-clerk-root",
                  cardBox: "auth-clerk-card",
                  card: "auth-clerk-card-inner",
                  header: "auth-clerk-hide",
                  footer: "auth-clerk-hide",
                  socialButtonsBlockButton: "auth-provider-btn",
                  socialButtonsBlockButtonText: "auth-provider-btn-text",
                  dividerRow: "auth-divider",
                  dividerText: "auth-divider-text",
                  formButtonPrimary: "auth-email-btn",
                  formFieldLabel: "auth-form-label",
                  formFieldInput: "auth-form-input",
                  footerActionLink: "auth-link",
                },
              }}
            />
          </div>

          <footer className="auth-footer">
            <p>
              Already have an account? <Link href="/login">Log in</Link>
            </p>
            <p>
              Forgot password? <Link href="/forgot-password">Reset it here</Link>
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
}
