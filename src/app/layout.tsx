import { Header } from "@/components/header/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>GPSWeb API</title>
      </head>
      <body className={`antialiased`}>
        <Header />

        {children}
      </body>

    </html>
  );
}
