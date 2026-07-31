import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Website and enrollment terms for Alarabiya Academy.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link className="legal-brand" href="/">← Back to Alarabiya Academy</Link>
      <article>
        <p className="eyebrow"><span></span> Legal</p>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated: July 2026</p>
        <section>
          <h2>Website use</h2>
          <p>This website provides information about the academy and a way to request a trial lesson. You agree to provide accurate information and not misuse, disrupt, or attempt unauthorized access to the website.</p>
        </section>
        <section>
          <h2>Trial lessons and enrollment</h2>
          <p>A trial request is not a guarantee of a particular tutor or time. Ongoing lesson schedules, fees, cancellations, rescheduling, and refunds are governed by the enrollment terms provided before payment.</p>
        </section>
        <section>
          <h2>Educational content</h2>
          <p>Academy materials are provided for personal learning. Unless written permission is given, they may not be reproduced, sold, distributed, recorded, or republished.</p>
        </section>
        <section>
          <h2>Availability</h2>
          <p>We work to keep information accurate and the website available, but cannot guarantee uninterrupted access. Program details, tutor availability, and website content may change.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Questions may be sent to <a href="mailto:hello@alarabiyaacademy.com">hello@alarabiyaacademy.com</a>.</p>
        </section>
        <p className="legal-note">These starter terms should be reviewed for the academy&apos;s country, final pricing, cancellation policy, payment providers, and applicable laws before launch.</p>
      </article>
    </main>
  );
}
