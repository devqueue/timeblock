"use client";

import { LegalLayout } from "@/components/legal/legal-layout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 20, 2024">
      <h2>Introduction</h2>
      <p>
        At timetabs, we take your privacy seriously. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our service.
      </p>

      <h2>Information We Collect</h2>
      <h3>Personal Information</h3>
      <p>
        We may collect personal information that you voluntarily provide,
        including:
      </p>
      <ul>
        <li>Name and email address</li>
        <li>Calendar data and scheduling preferences</li>
        <li>Usage data and interaction with our service</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the collected information for various purposes:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To notify you about changes to our service</li>
        <li>To provide customer support</li>
        <li>
          To gather analysis or valuable information to improve our service
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information. However, no method of transmission
        over the Internet is 100% secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may employ third-party companies and individuals to facilitate our
        service, provide service-related services, or assist us in analyzing how
        our service is used.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to data processing</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at privacy@timetabs.co
      </p>
    </LegalLayout>
  );
}
