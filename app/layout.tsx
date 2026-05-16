import type { Metadata } from "next";
import { Inter, Poppins, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JG University — New Age Tech-Driven University | Ahmedabad",
  description:
    "JG University is a UGC-approved, tech-driven university in Ahmedabad offering 50+ programmes across Management, Engineering, Law, Commerce, Computing and more. NEP 2020 compliant. Admissions open.",
  keywords: "JG University, university Ahmedabad, UGC approved, BBA, B.Tech, MBA, MCA, NEP 2020",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
