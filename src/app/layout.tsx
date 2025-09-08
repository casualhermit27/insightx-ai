import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexify - AI Platform",
  description: "Access powerful AI models and APIs on-demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
