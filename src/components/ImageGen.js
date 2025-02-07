import React, { useState } from 'react';

function ImageGen() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_OPENAI_API_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: '256x256',
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // data.data[0].url should contain the generated image URL
      setImageUrl(data.data[0].url);
    } catch (err) {
      console.error(err);
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-gen-container">
      <h2>AI Image Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a description, e.g. 'A futuristic cityscape at sunset'"
          required
        />
        <button type="submit">Generate Image</button>
      </form>

      {loading && <p>Generating your image...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {imageUrl && (
        <div>
          <h3>Generated Image</h3>
          <img src={imageUrl} alt="AI Generated" />
        </div>
      )}
    </div>
  );
}

export default ImageGen;
