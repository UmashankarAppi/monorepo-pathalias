import type { Metadata } from "next";
import { ThemeRegistry } from "@shared/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Admin Dashboard - Theme Sharing Demo",
  description: "Admin dashboard demonstrating shared theme with custom overrides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry defaultMode="light">
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
