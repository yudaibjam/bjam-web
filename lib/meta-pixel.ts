export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export function pageview() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function trackEvent(name: string, options?: Record<string, string>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
}
