import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Vengence UI — Expressive React Components & shadcn Registry",
  description:
    "An open-source React component library combining shadcn-compatible component distribution with expressive animations. Built for developers who care about the details.",
  keywords: [
    "React",
    "Tailwind CSS",
    "shadcn",
    "Next.js",
    "Motion",
    "Component Library",
    "UI Library",
    "Vengence UI",
  ],
  authors: [{ name: "Vengence UI Team" }],
  openGraph: {
    title: "Vengence UI — Expressive React Components & shadcn Registry",
    description:
      "An open-source React component library combining shadcn-compatible component distribution with expressive animations.",
    url: "https://vengence-rho.vercel.app",
    siteName: "Vengence UI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col selection:bg-neutral-800 selection:text-neutral-100">
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
