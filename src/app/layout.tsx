import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
