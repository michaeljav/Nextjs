import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppContainer from "@/components/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* hue saturation light and alpha hsla()*/}
      <body
        className={inter.className}
        style={{ backgroundColor: "hsla(0,0%,95%,1.0)" }}
      >
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
