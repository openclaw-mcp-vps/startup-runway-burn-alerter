import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runway Alerter — Know exactly when you'll run out of money",
  description: "Connect your bank and Stripe to track burn rate, calculate runway, and get automated alerts before you run out of cash."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c87dfa0d-4b2e-4bb8-883f-269299c31e64"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
