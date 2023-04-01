import { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': '1MvvMbsdVvSQ3TFuxfyoCA==rjpTXju8ckvX1es5',
            },
            contentType: 'application/json',
          },
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <h3>Sorry, something went wrong!</h3>;

  return (
    <div className="quotes">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        data.map((item) => <h3 key={item.author}>{item.quote}</h3>)
      )}
    </div>
  );
};

export default Quotes;
