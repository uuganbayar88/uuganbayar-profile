import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://uuganbayar-profile.vercel.app"),
  title: "Чулуунбаатар Ууганбаяр — Инженер, менежер, лидер",
  description:
    "SteppeLink-ийн өмнөх CEO, Flynk Tech-ийн үүсгэн байгуулагч. OTA платформ, эрүүл мэндийн IT, AI, cloud чиглэлээр 12+ жилийн туршлага.",
  authors: [{ name: "Uuganbayar Chuluunbaatar" }],
  creator: "Uuganbayar Chuluunbaatar",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
