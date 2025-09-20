import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Alpha Warriors",
  description: "Indoor Cricket Team (Nepal)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} font-sans antialiased w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
