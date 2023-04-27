import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': 'yuvGgp0Ea2KDOq1i1PGa2w==OXR9RvJwtdSStjuu',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data.length > 0
      && (
      <div className="quoteContainer">
        <h3>{data[0].quote}</h3>
        <h4>{data[0].author}</h4>
      </div>
      )}
    </>
  );
}

export default Quote;
