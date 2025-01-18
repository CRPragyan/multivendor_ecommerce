import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Divine Clan Attire",
  description: "WellCome To devine Clan Attire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${barlowFont.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
