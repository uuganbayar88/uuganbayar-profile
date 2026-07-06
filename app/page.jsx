import Profile from "@/components/Profile";
import { content } from "@/app/content";

export const metadata = {
  title: content.mn.meta.title,
  description: content.mn.meta.description,
};

export default function Page() {
  return <Profile lang="mn" />;
}
