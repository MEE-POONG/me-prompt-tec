// src/lib/partners-api.ts

export type Partner = {
  id: string;
  name: string;
  type: string;
  logo?: string | null;        // base64 หรือ path รูป
  website?: string | null;
  facebookUrl?: string | null;
  description?: string | null;
  status: string;
};

const API_BASE = process.env.NEXT_PUBLIC_DASHBOARD_API_BASE_URL ?? "";

export async function getPartners(): Promise<Partner[]> {
  const base = API_BASE; // ถ้าไม่ตั้ง env จะเป็น path relative (ใช้ domain เดียวกับหน้าเว็บ)

  const url = `${base}/api/partners?status=active`;
  console.log("🔗 Fetch partners from:", url);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch partners: ${res.status}`);
  }

  const json = await res.json();
  return json.data as Partner[];
}
