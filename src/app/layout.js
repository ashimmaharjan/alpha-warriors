import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
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
        className={`${oswald.variable} antialiased w-screen overflow-x-hidden font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
