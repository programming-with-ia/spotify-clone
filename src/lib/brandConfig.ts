export const brandConfig = {
    Brand: "Spotify - Clone",
    email: "mimranabid2@gmail.com",
    BrandColor: "#f79256",
    description: "Music Player",
    seo: {
        category: "Music Player"
    },
    url:
        process.env.NEXT_PUBLIC_BASE_URL ?? // * Production URL
        process.env.NEXT_PUBLIC_VERCEL_URL ?? // * Vercel Auto URL
        'http://localhost:3000/', // * Dev
}