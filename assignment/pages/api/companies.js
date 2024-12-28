import { query } from '../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const company = await query('SELECT * FROM companies WHERE id = $1', [id]);
    const directors = await query('SELECT * FROM directors WHERE company_id = $1', [id]);

    res.status(200).json({ company: company.rows[0], directors: directors.rows });
  } else {
    const companies = await query('SELECT * FROM companies');
    res.status(200).json({ companies: companies.rows });
  }
}
