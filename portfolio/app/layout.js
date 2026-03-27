import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Neves DL7 • Red Team | Cybersecurity",
  description: "Cybersecurity • Red Team • Threat Intelligence • OSINT • Malware Dev",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className="bg-zinc-950 text-white antialiased">
        {children}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}