export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社b-jam",
    url: "https://b-jam.co.jp",
    description: "ビジネスをジャムろう。AIとビジネスのジャムセッションで御社の成果を引き出すパートナー。",
    founder: {
      "@type": "Person",
      name: "今井雄大",
    },
    foundingDate: "2024-01-22",
  };
}
