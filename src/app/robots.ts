import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
        sitemap: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000') +  '/sitemap.xml',
      }
}