/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/:path*", // Apply to all API routes
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://stripe-subscription-manager.vercel.app" }, // Specify your exact origin for security
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, rsc" // Explicitly allow 'rsc' header
                    },
                ],
            },
            {
                source: "/api/logout/:path*", // Adjust the path as needed
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://stripe-subscription-manager.vercel.app" },
                    { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
                    { key: "Access-Control-Allow-Credentials", value: "true" }
                ]
            }
        ];
    },
};

export default nextConfig;
