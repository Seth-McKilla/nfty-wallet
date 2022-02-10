import { useEffect, useState, useRef } from "react";

export default function useOpensea(address) {
  const isMounted = useRef(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    isMounted.current = true;

    const fetchNfts = async () => {
      if (!address || !isMounted.current) return;
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.opensea.io/api/v1/assets?owner=${address}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { assets } = await response.json();
        setNfts(assets);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }

      return setLoading(false);
    };

    fetchNfts();

    return () => {
      isMounted.current = false;
    };
  }, [address]);

  return { loading, error, nfts };
}
