import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Shell } from "@/components/layout/shell";
import { SITE } from "@/lib/data";

// Body face: Inter. Display face: Space Grotesk (Geist/Satoshi aren't on
// Google Fonts — swap via next/font/local if you buy/download them).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.title}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Vivek Mishra", "Full-Stack Developer", "MERN Developer", "React Developer Mumbai",
    "Node.js Developer", "Fintech Developer", "BBPS", "Payment Gateway Integration",
    "react-bulk-excel-import",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.tagline,
    siteName: SITE.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }], // [PLACEHOLDER] add public/og.png
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.title}`,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.title,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  url: SITE.url,
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  sameAs: [
    "https://github.com/vivek1209-star-blog",
    "https://www.linkedin.com/in/vivek-mishra-19941b113",
    "https://medium.com/@mishra.vivek9612",
  ],
  knowsAbout: ["React", "Node.js", "TypeScript", "MySQL", "MongoDB", "Payment Systems", "BBPS"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <Shell>{children}</Shell>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
