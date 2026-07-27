import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mina Adel | Digital Imaging Technician",
  description:
    "Professional Digital Imaging Technician specializing in feature films, TV series and international productions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}