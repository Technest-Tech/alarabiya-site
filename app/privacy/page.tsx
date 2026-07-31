import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How Alarabiya Academy handles enrollment and website information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-brand" href="/">← Back to Alarabiya Academy</Link>
      <article>
        <p className="eyebrow"><span></span> Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: July 2026</p>
        <section>
          <h2>Information we collect</h2>
          <p>When you request a trial lesson, we may collect your name, email address, phone number, learner age group, program interest, and the information you choose to add to your message.</p>
        </section>
        <section>
          <h2>How we use information</h2>
          <p>We use this information to respond to your enquiry, arrange a suitable tutor and lesson time, deliver academy services, improve the learning experience, and send relevant service communications.</p>
        </section>
        <section>
          <h2>Sharing and retention</h2>
          <p>We do not sell personal information. Information is shared only with team members and service providers who need it to arrange or deliver your learning. We retain it only as long as reasonably necessary for these purposes and legal obligations.</p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>You may ask to access, correct, or delete your personal information, or opt out of non-essential communications, by contacting the academy.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For privacy questions, email <a href="mailto:hello@alarabiyaacademy.com">hello@alarabiyaacademy.com</a>.</p>
        </section>
        <p className="legal-note">This starter policy should be reviewed for the academy&apos;s country, business practices, analytics tools, advertising setup, and applicable laws before launch.</p>
      </article>
    </main>
  );
}
