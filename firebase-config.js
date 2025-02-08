export async function onRequest(context) {
    try {
        // Fetch Firebase config from Cloudflare environment variables
        const firebaseConfigString = context.env.Firebase; 

        // Ensure it's not empty
        if (!firebaseConfigString) {
            throw new Error("Firebase config not found in environment variables.");
        }

        // Parse the stored JSON
        const firebaseConfig = JSON.parse(firebaseConfigString);

        // Ensure the API key exists
        if (!firebaseConfig.apiKey) {
            throw new Error("Invalid Firebase config: Missing API key.");
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
