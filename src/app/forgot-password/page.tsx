import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import AuthShowcase from "../../components/auth/AuthShowcase";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <section className="auth-layout">
        <AuthShowcase
          kicker="Account Recovery"
          title="Reset your password securely."
          description="Use your registered email to recover access and get back to your saved homes and active applications."
          imageSrc="/forgot-password.png"
        />

        <section className="auth-panel">
          <div className="auth-panel-head">
            <Link href="/login" className="auth-back-link">
              Back to login
            </Link>
            <div className="auth-brand">
              <Image
                src="/patakeja-logo-removebg-preview.png"
                alt="PataKeja"
                width={148}
                height={38}
              />
              <span className="auth-chip">Recovery</span>
            </div>
          </div>

          <header className="auth-header">
            <p className="auth-welcome">Need help?</p>
            <h2>Forgot your password?</h2>
            <p>
              Enter your email to continue with Clerk recovery and set a new
              password.
            </p>
          </header>

          <div className="auth-clerk-shell">
            <SignIn
              path="/forgot-password"
              routing="path"
              signUpUrl="/signup"
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
              Remembered it? <Link href="/login">Log in</Link>
            </p>
            <p>
              Need an account? <Link href="/signup">Create one</Link>
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
}
