"use client"

import axios from 'axios';

export default async function handler(req, res) {
  const { question } = req.body;
  const apiKey = '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';

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: question,
        max_tokens: 150,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    res.status(200).json({ answer: response.data.choices[0].text });
  } catch (error) {
    console.error('Error fetching answer:', error);
    res.status(500).json({ error: 'An error occurred while fetching the answer.' });
  }
}

