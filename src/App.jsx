import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import background from "./assets/pic.jpg";
import "./index.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen overflow-hidden"
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="flex flex-col border border-white rounded-lg p-5 backdrop-blur bg-white/30 gap-2 lg:w-[500px]">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              currencyOptions={options}
              selectedCurrency={from}
            />
            <button onClick={swap} className="p-1 z-[1] mt-[-20px] mb-[-20px] text-white bg-[#166eff] text-center rounded-md w-fit px-3 flex justify-center items-center mx-auto">swap</button>
            <InputBox
              label="To"
              amount={convertedAmount}
              onAmountChange={setConvertedAmount}
              onCurrencyChange={setTo}
              currencyOptions={options}
              selectedCurrency={to}
              amountDisabled={true}
            />
            <button type="submit" className="p-1 h-12 text-white bg-[#166eff] text-center rounded-lg ">
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
