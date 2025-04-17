import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "The Private GP Forum",
  description:
    "A monthly 1-minute update on all things private general practice. Industry insights, the latest technology and employment opportunities. All readable in 60 seconds.",
  openGraph: {
    type: "website",
    url: "https://www.theprivategpforum.co.uk/",
    title: "The Private GP Forum",
    description:
      "A monthly 1-minute update on all things private general practice. Industry insights, the latest technology and employment opportunities. All readable in 60 seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-plus-jakarta-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
