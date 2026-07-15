import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundMesh from "@/components/ui/BackgroundMesh";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8FAFC",
};

export const metadata: Metadata = {
  title: "Lin Myat Oo — Software Engineer | AI & ML Enthusiast",
  description:
    "Portfolio of Lin Myat Oo — a Software Engineer passionate about Artificial Intelligence, Machine Learning, backend development, DevOps, and cloud computing. Explore my projects, skills, and experience.",
  keywords: [
    "Lin Myat Oo",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "Backend Developer",
    "DevOps",
    "Cloud Computing",
    "Portfolio",
  ],
  metadataBase: new URL("https://linmyatoo.dev"),
  authors: [{ name: "Lin Myat Oo" }],
  openGraph: {
    title: "Lin Myat Oo — Software Engineer",
    description:
      "Software Engineer passionate about AI, ML, and building scalable systems.",
    url: "https://linmyatoo.dev",
    siteName: "Lin Myat Oo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lin Myat Oo — Software Engineer",
    description:
      "Software Engineer passionate about AI, ML, and building scalable systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased relative overflow-x-hidden">
        <BackgroundMesh />
        {children}
      </body>
    </html>
  );
}
