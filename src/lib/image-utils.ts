// Generates a shimmer SVG as base64 for use as blurDataURL in Next.js Image component
export function shimmerBlurDataURL(w = 700, h = 475): string {
  const shimmer = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${w}" height="${h}" fill="#1a1a2e"/>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <defs><linearGradient id="g"><stop stop-color="#1a1a2e" offset="0%"/><stop stop-color="#2a2a3e" offset="50%"/><stop stop-color="#1a1a2e" offset="100%"/></linearGradient></defs>
  </svg>`;
  
  return `data:image/svg+xml;base64,${typeof window === "undefined" 
    ? Buffer.from(shimmer).toString("base64") 
    : window.btoa(shimmer)}`;
}
