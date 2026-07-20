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
  metadataBase: new URL("https://the-vitality-clinics.vercel.app"),

  title: {
    default: "The Vitality Clinics | Best Medical Clinic in Hurghada",
    template: "%s | The Vitality Clinics",
  },

  description:
    "The Vitality Clinics is a leading medical clinic in Hurghada providing Internal Medicine, Pediatrics, Gynecology, Obstetrics, Infertility Care, 4D Ultrasound, Travel Healthcare Services, Emergency Medical Care, and comprehensive healthcare for residents, expatriates, and tourists.",

  keywords: [
    "Medical Clinic Hurghada",
    "Best Clinic in Hurghada",
    "Doctors in Hurghada",
    "Medical Center Hurghada",
    "Internal Medicine Hurghada",
    "Gynecology Hurghada",
    "Obstetrics Hurghada",
    "Women's Health Hurghada",
    "Infertility Clinic Hurghada",
    "Fertility Specialist Hurghada",
    "4D Ultrasound Hurghada",
    "Pregnancy Ultrasound Hurghada",
    "Travel Healthcare Hurghada",
    "Emergency Clinic Hurghada",
    "Tourist Medical Care Hurghada",
    "The Vitality Clinics",
    "Vitality Medical Care",
  ],

  authors: [
    {
      name: "Vitality Medical Care",
    },
  ],

  creator: "Vitality Medical Care",

  publisher: "Vitality Medical Care",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "The Vitality Clinics | Best Medical Clinic in Hurghada",

    description:
      "Professional medical care in Hurghada with experienced specialists, advanced diagnostics, infertility unit, pregnancy care, 4D ultrasonography, and healthcare services for residents and tourists.",

    url: "https://the-vitality-clinics.vercel.app",

    siteName: "The Vitality Clinics",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "The Vitality Clinics",

    description:
      "Comprehensive healthcare services in Hurghada for residents, expatriates and tourists.",
  },

  icons: {
    icon: "/favicon.ico",
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