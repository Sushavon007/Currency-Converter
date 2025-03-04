import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setCurrencyData(res[currency]))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);
  return currencyData;
}

export default useCurrencyInfo;
