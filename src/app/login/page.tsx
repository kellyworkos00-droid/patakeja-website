import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import AuthShowcase from "../../components/auth/AuthShowcase";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <section className="auth-layout">
        <AuthShowcase
          kicker="Patakeja Escrow Homes"
          title="Welcome back to smarter renting."
          description="Log in to continue secure applications, protected payments, and verified conversations with landlords."
          imageSrc="/login.png"
        />

        <section className="auth-panel">
          <div className="auth-panel-head">
            <Link href="/" className="auth-back-link">
              Back to onboarding
            </Link>
            <div className="auth-brand">
              <Image
                src="/patakeja-logo-removebg-preview.png"
                alt="PataKeja"
                width={148}
                height={38}
              />
              <span className="auth-chip">Escrow Protected</span>
            </div>
          </div>

          <header className="auth-header">
            <p className="auth-welcome">Welcome back</p>
            <h2>Log in to your account</h2>
            <p>Use your email or connected provider to continue.</p>
          </header>

          <div className="auth-clerk-shell">
            <SignIn
              path="/login"
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
              New here? <Link href="/signup">Create your account</Link>
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
