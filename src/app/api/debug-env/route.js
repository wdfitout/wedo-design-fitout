export const runtime = "nodejs";

export async function GET() {
  const keys = ["SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS","FROM_EMAIL","TO_EMAIL"];
  const present = Object.fromEntries(
    keys.map((k) => [k, Boolean((process.env[k] || "").trim())])
  );
  // Never leak actual values
  return Response.json({ present });
}
