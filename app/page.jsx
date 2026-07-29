import Profile from "@/components/Profile";
import { content } from "@/app/content";
import { getManagedProfile } from "@/lib/profile-studio";

export const metadata = {
  title: content.mn.meta.title,
  description: content.mn.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      mn: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "profile",
    locale: "mn_MN",
    url: "/",
    title: content.mn.meta.title,
    description: content.mn.meta.description,
    siteName: "Ч. Ууганбаяр",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.mn.meta.title,
    description: content.mn.meta.description,
    images: ["/opengraph-image"],
  },
};

export default async function Page() {
  const managedProfile = await getManagedProfile();
  return <Profile lang="mn" managedProfile={managedProfile} />;
}
