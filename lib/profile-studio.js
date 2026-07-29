const PROFILE_URL =
  process.env.PROFILE_STUDIO_API_URL ||
  "https://profile-studio.uuganaa88.chatgpt.site/api/v1/public/profiles/uuganbayar";

export async function getManagedProfile() {
  try {
    const response = await fetch(PROFILE_URL, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.profile ?? null;
  } catch {
    return null;
  }
}
