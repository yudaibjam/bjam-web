export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社b-jam",
    url: "https://b-jam.co.jp",
    description: "AI活用で業務を変える。導入から定着まで伴走するAIコンサルティング。",
    founder: {
      "@type": "Person",
      name: "今井雄大",
    },
    foundingDate: "2024-01-22",
  };
}
