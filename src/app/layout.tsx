import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AetherDigital · Desenvolvimento Web",
    template: "%s · AetherDigital",
  },
  description:
    "Desenvolvimento de aplicações web modernas, rápidas e escaláveis — sistemas SaaS, dashboards e integrações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body
        className={cn(
          roboto.className,
          "min-h-full flex flex-col bg-[#07111F] font-sans antialiased text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
