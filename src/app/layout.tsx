import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Slingverse | Custom ERP & CRM Solutions",description:"Custom CRM dashboards, scalable ERP platforms and connected business systems by Slingverse."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
