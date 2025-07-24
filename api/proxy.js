export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }
  export default async function handler(req, res) {
  // Log the type and value of req.body
  console.log('typeof req.body:', typeof req.body);
  console.log('req.body:', req.body);

  // If it's a string, parse it
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

  // Now send to your backend
  const botRes = await fetch("http://astro.wisp.uno:10478/send-discord", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const botRes = await fetch("http://astro.wisp.uno:10478/send-discord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await botRes.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(botRes.status).send(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to reach bot server", details: error.toString() });
  }
}
