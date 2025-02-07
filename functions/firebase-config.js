export async function onRequest(context) {
    const firebaseConfig = JSON.parse(context.env.Firebase); // Fetch from environment variable

    return new Response(JSON.stringify(firebaseConfig), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
