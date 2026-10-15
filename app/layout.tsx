import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Slingverse — Software, ERP, CRM & AI Automation",
  description: "Custom software, AI automation, CRM and ERP solutions that help ambitious businesses work smarter and scale with confidence."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}