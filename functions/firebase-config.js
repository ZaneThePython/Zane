export async function onRequest(context) {
    try {
        const firebaseConfig = JSON.parse(context.env.Firebase); // Fetch from Cloudflare Environment Variables
        return new Response(JSON.stringify(firebaseConfig), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to load Firebase config" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
