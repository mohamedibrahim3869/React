const { useState, useMemo } = React;

const goodMapping = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

const currenciesArr = Object.keys(goodMapping);

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);

  // Requirement #6: Changing the value of the second select (toCurrency) 
  // should NOT cause the converted amounts to be recalculated.
  // We achieve this by excluding toCurrency from the useMemo dependency array.
  const conversions = useMemo(() => {
    const result = {};
    const baseAmountInUSD = amount / goodMapping[fromCurrency];
    currenciesArr.forEach((curr) => {
      result[curr] = baseAmountInUSD * goodMapping[curr];
    });
    return result;
  }, [amount, fromCurrency]);

  // Requirement #8: Changing the second select updates the display 
  // by simply looking up the pre-calculated value.
  const convertedAmount = conversions[toCurrency];

  return (
    <div className="converter">
      {/* Requirement #2: input[type="number"] */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      {/* Requirement #3 & #4: Select elements with options */}
      <select
        id="start-curr"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currenciesArr.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>

      <select
        id="target-curr"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currenciesArr.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>

      {/* Requirement #9: Format XX.XX CCC */}
      <div className="result">
        {convertedAmount.toFixed(2)} {toCurrency}
      </div>
    </div>
  );
}
