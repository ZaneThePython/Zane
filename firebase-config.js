export async function onRequest(context) {
    try {
        // Fetch Firebase config from Cloudflare environment variable
        const firebaseConfig = JSON.parse(context.env.Firebase);
        
        // Ensure the config contains an API key
        if (!firebaseConfig.apiKey) {
            throw new Error("Missing Firebase API key");
        }

        return new Response(JSON.stringify(firebaseConfig), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ 
            error: "Failed to load Firebase config", 
            details: error.message 
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
