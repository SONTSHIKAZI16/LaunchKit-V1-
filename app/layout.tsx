import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mthiya LaunchKit",
    template: "%s | Mthiya LaunchKit",
  },
  description:
    "A connected operating system for turning a founder's idea, evidence, and decisions into launch execution.",
};

export const viewport: Viewport = {
  themeColor: "#090c0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
