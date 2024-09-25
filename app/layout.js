import { Poppins } from "@next/font/google"
import "./globals.css";


const poppins = Poppins({subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "DeutschNow",
  description: "Learn german by practicing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
