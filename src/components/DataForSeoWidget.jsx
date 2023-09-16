import { useState } from 'react';

const DataForSeoWidget = () => {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/check-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data);
            } else {
                console.error('Error checking URL');
            }
        } catch (error) {
            console.error('Error checking URL:', error);
        }
    };

    return (
        <div>
            <h2>DataForSEO Widget</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Check URL</button>
            </form>
            {result && (
                <div>
                    <h3>Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default DataForSeoWidget;