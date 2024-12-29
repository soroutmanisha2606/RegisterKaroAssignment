import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const company = await query("SELECT * FROM company WHERE id = $1", [id]);
    const directors = await query("SELECT * FROM directors WHERE company_id = $1", [id]);

    return NextResponse.json({ company: company.rows[0], directors: directors.rows });
  }

  const companies = await query("SELECT * FROM company");
  return NextResponse.json({ companies: companies.rows });
}
