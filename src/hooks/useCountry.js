import { useState, useEffect } from "react";

function useCountry(code) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!code) return;

    setLoading(true);
    setError("");

    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching");
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]); // IMPORTANT
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [code]);

  return { country, loading, error };
}

export default useCountry;