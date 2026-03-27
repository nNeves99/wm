import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets:["latin"], 
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--fontspace-grotesk",
  weight: ["500", "600"],
});

export const metadata = {
  title: "André Neves • Portfolio",
  description: "Cybersecurity • Red Team • Threat Intelligence • OSINT • Malware Dev",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variablw} ${spaceGrotesk.variable}`}>
      <body className="bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}