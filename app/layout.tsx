import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://minaadel-portfolio-e3zr-5g8e1vjmk-minaadel.vercel.app"
  ),

  title: "Mina Adel | Digital Imaging Technician",

  description:
    "Digital Imaging Technician and Camera Systems Specialist working on feature films, TV series and international productions.",

  openGraph: {
    title: "Mina Adel | Digital Imaging Technician",
    description:
      "Feature Films • TV Series • International Productions",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en">

      <body>{children}</body>

    </html>

  );

}