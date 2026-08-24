export default function sitemap() {
  const base = "https://uuganbayar-profile.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date(), alternates: { languages: { mn: `${base}/`, en: `${base}/en` } } },
    { url: `${base}/en`, lastModified: new Date(), alternates: { languages: { mn: `${base}/`, en: `${base}/en` } } },
  ];
}
