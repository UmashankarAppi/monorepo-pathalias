import type { Metadata } from "next";
import { ThemeRegistry } from "@shared/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Web App - Theme Sharing Demo",
  description: "Customer-facing web application demonstrating shared theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
