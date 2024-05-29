import { NavTabs, Navbar } from "@/components";
import "./globals.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export const metadata = {
  title: "ADON",
  description: "Application Driven Overlay Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className="relative bg-muf">
        <div className = "bg-white container-bts">
          <NavTabs />
          {children}
        </div>
      </body>
    </html>
  );
}
