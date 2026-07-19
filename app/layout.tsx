import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Vitality Clinics | Healthcare Excellence in Hurghada",
  description:
    "The Vitality Clinics in Hurghada provides comprehensive medical care, specialist consultations, travel healthcare services, women's health, 4D ultrasound, and medical support for residents, expatriates, and tourists.",
  keywords: [
    "The Vitality Clinics",
    "Medical Clinic Hurghada",
    "Healthcare in Hurghada",
    "Travel Healthcare Services",
    "Doctors in Hurghada",
    "4D Ultrasound Hurghada",
    "Tourist Medical Care",
  ],
  authors: [{ name: "Vitality Medical Care" }],
  openGraph: {
    title: "The Vitality Clinics | Healthcare Excellence in Hurghada",
    description:
      "Professional medical care for residents, expatriates, and tourists in Hurghada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}