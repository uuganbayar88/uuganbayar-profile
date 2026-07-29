import Profile from "@/components/Profile";
import { content } from "@/app/content";

export const metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
  alternates: {
    canonical: "/en",
    languages: {
      mn: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/en",
    title: content.en.meta.title,
    description: content.en.meta.description,
    siteName: "CH. Uuganbayar",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.en.meta.title,
    description: content.en.meta.description,
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return <Profile lang="en" />;
}
