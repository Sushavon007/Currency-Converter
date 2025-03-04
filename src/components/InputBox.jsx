import React from "react";
import "../index.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'inr',
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg">
      <div className="flex flex-col w-1/2 gap-1">
        <label className="poppins text-gray-400">{label}</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
          className="border-none rounded-lg p-1"
        />
      </div>
      <div className="flex flex-col text-right w-1/2 gap-1">
        <label className="poppins text-gray-400">Currency Type</label>
        <select value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisabled} className="border-none bg-[#f1f1f1] rounded-lg p-1 w-fit self-end">
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
