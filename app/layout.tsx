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
  title: "Victor Adeleke Afolayan - Full Stack Developer",
  description:
    "A passionate full-stack software developer building beautiful digital experiences. Explore my portfolio, projects, and expertise.",
  keywords:
    "developer, software engineer, full-stack, next.js, react, portfolio",
  authors: [{ name: "Victor Adeleke Afolayan" }],
  openGraph: {
    title: "Victor Adeleke Afolayan - Full Stack Developer",
    description: "Building beautiful digital experiences",
    type: "website",
    emails: ["adelekeafolayan@gmail.com"],
    images: [
      "https://res.cloudinary.com/dzcwsxuvc/image/upload/v1779364773/IMG_0233_wqt1vv.png",
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
