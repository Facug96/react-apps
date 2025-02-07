import React, { useState } from 'react';

function CryptoTracker() {
  const [symbol, setSymbol] = useState('BTC');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your actual API Gateway URL
  const LAMBDA_ENDPOINT = 'https://abc123xyz.execute-api.us-east-1.amazonaws.com/get-crypto-data';

  const fetchData = async () => {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch(LAMBDA_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symbol }) // send user-selected symbol
      });

      if (!response.ok) {
        throw new Error(`Lambda call failed: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      // CoinMarketCap's structure: result.data[symbol].quote.USD.price, etc.
      setData(result);
    } catch (err) {
      console.error(err);
      setError('Could not fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="crypto-tracker">
      <h2>Crypto Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Symbol:
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="e.g. BTC"
          />
        </label>
        <button type="submit">Get Price</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && data.data && data.data[symbol] && (
        <div>
          <h3>{symbol} Price Data</h3>
          <p>Price (USD): {data.data[symbol].quote.USD.price.toFixed(2)}</p>
          <p>Market Cap: {data.data[symbol].quote.USD.market_cap.toFixed(2)}</p>
          <p>24h Volume: {data.data[symbol].quote.USD.volume_24h.toFixed(2)}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
}

export default CryptoTracker;