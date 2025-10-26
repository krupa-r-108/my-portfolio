import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })


export const metadata = {
  title: "Krupa | Developer Portfolio",
  description: "Frontend Developer | MERN Stack | Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
