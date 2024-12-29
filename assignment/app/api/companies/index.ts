import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch all companies from Supabase
    const { data, error } = await supabase
      .from('company')
      .select('id, name, details');
console.log('inside --------')
    if (error) throw error;

    res.status(200).json({ companies: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching companies' });
  }
}
