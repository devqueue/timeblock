"use client";

import { LegalLayout } from "@/components/legal/legal-layout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="March 20, 2024">
      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using TimeBlock, you agree to be bound by these Terms
        and Conditions. If you disagree with any part of the terms, you may not
        access the service.
      </p>

      <h2>Use License</h2>
      <p>
        Permission is granted to temporarily access TimeBlock for personal,
        non-commercial transitory viewing only.
      </p>

      <h3>This license shall not allow you to:</h3>
      <ul>
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose</li>
        <li>
          Attempt to decompile or reverse engineer any software contained in
          TimeBlock
        </li>
        <li>
          Remove any copyright or other proprietary notations from the materials
        </li>
      </ul>

      <h2>User Account</h2>
      <p>
        To access certain features of TimeBlock, you may be required to create
        an account. You are responsible for maintaining the confidentiality of
        your account information.
      </p>

      <h2>Service Modifications</h2>
      <p>
        We reserve the right to withdraw or amend TimeBlock, and any service or
        material we provide, in our sole discretion without notice.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall TimeBlock or its suppliers be liable for any damages
        arising out of the use or inability to use the materials on TimeBlock.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws and you irrevocably submit to the exclusive jurisdiction
        of the courts.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. By using this
        website you are agreeing to be bound by the then current version of
        these Terms and Conditions.
      </p>

      <h2>Contact Information</h2>
      <p>
        Questions about the Terms of Service should be sent to us at
        terms@timeblock.com
      </p>
    </LegalLayout>
  );
}
