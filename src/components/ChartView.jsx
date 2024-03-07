import { useEffect, useState } from "react";
import { Change24hr } from "./Change24hr";
import TradingViewWidget from "./TradingViewWidget";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

export const ChartView = () => {
  const [coinDetail, setCoinDetail] = useState([]);

  useEffect(() => {
    fetchCoinDetails();
  }, []);

  const fetchCoinDetails = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true&precision=3"
      );
      const data = await response.json();
      if (data.bitcoin) {
        setCoinDetail(data.bitcoin);
      }
    } catch (error) {
      console.log("error fetching coin details:", error);
    }
  };

  // bitcoin.usd bitcoin.inr bitcoin.usd_24h_change

  return (
    <div className="mx-8 h-{800} bg-white rounded-lg shadow-sm my-2">
      <div className="mx-4">
        <div className="flex my-2 py-4 ">
          <img
            className="h-6 rounded-full w-6 my-1"
            src="https://images.pexels.com/photos/6763964/pexels-photo-6763964.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=" bitcoin_image"
          />
          <p className="text-xl mx-2 font-medium my-1 flex">Bitcoin</p>
          <p className="my-2 text-sm font-medium text-gray-400">BTC</p>
          <p className="mx-5 rounded-lg bg-gray-400 text-white py-1 px-2">
            Rank #1
          </p>
        </div>
        <div className="flex">
          <p className="text-2xl font-medium flex">
            <BsCurrencyDollar className="my-1 text-bold" />
            {coinDetail.usd}
          </p>
          <div className="my-2 ml-5">
            <Change24hr percent={coinDetail.usd_24h_change?.toFixed(2)} />
          </div>
          <p className="py-2 ml-2 text-gray-500">(24 H)</p>
        </div>
        <div>
          <p className="font-medium pb-5 flex mx-2">
            <FaRupeeSign className="my-1 text-sm" />
            {coinDetail.inr}
          </p>
        </div>
      </div>
      <div className="ml-4">
        <TradingViewWidget symbol="BITSTAMP:BTCUSD" />
      </div>
    </div>
  );
};
