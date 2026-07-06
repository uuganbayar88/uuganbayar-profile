import Profile from "@/components/Profile";
import { content } from "@/app/content";

export const metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
};

export default function Page() {
  return <Profile lang="en" />;
}
