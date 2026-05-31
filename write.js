import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// POST /api/ads/write  body: { platform, budget }
// Claude writes tailored ad variants for the given platform.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  try {
    const { platform, budget } = req.body || {};
    const sys = "You are an elite automotive performance marketer. Write tight, high-converting ad copy for a Toyota dealership. No fluff, no emoji spam. Match the platform's native voice.";
    const prompt = `Platform: ${platform}. Monthly budget for this platform: $${budget||1000}. Write 2 short ad variants (headline + primary text) for promoting 2026 Toyota inventory at a family-owned Myrtle Beach dealership. Keep each variant tight and native to ${platform}.`;
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 400,
      system: sys,
      messages: [{ role: "user", content: prompt }],
    });
    const copy = msg.content.filter(b => b.type === "text").map(b => b.text).join("\n").trim();
    return res.status(200).json({ platform, copy });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
