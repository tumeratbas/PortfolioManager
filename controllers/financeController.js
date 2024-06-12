import fetch from 'node-fetch';

export const fetchCompanyData = async (req, res) => {
  const { query } = req.params;
  const apiKey = '2f612QuQaaiZR0OXgGJWVDKVR2jUael4';
  const url = `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ message: data.Error });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
