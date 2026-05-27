import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Slack Notifier — Auto-post git releases to Slack",
  description: "Monitors GitHub/GitLab repositories and automatically posts formatted changelog updates to your Slack channels. Save time, keep your team informed."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cb007573-c774-44f6-a332-119be65ddfaf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
