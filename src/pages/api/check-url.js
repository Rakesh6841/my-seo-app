import axios from 'axios';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { url } = req.body;
        const apiKey = '3e2b6ac0e27750a4'; // Replace with your DataForSEO API key

        try {
            const response = await axios.post(
                'https://api.dataforseo.com/v3/on_page/serp',
                {
                    tasks: [
                        {
                            target: url,
                            tag: 'basic',
                            se_language: 'en',
                            se_country: 'US',
                        },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );

            res.status(200).json(response.data);
        } catch (error) {
            console.error('DataForSEO API Error:', error);
            res.status(500).json({ error: 'DataForSEO API Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
