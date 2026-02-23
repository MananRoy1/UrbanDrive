import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "UrbanDrive - Drive the City Your Way",
  description:
    "Premium cars. Instant booking. Zero hassle. Experience the freedom of modern mobility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display min-h-screen flex flex-col overflow-x-hidden">
        {children}
        {/* @ts-expect-error react-hot-toast type mismatch with Next.js */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
