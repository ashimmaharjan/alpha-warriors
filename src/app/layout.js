import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alpha Warriors",
  description: "Indoor Cricket Team (Nepal)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} antialiased w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
