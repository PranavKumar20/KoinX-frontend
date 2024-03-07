import { Coin } from "./Coin";
import { useState, useEffect } from "react";

export const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [topTrendingCoins, setTopTrendingCoins] = useState([]);

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      if (data.coins) {
        setTrendingCoins(data.coins);

        const topTrending = data.coins.slice(0, 3);
        setTopTrendingCoins(topTrending);
      }
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };
  // coins[0].item.name
  return (
    <div className="bg-white mx-2 my-4 p-1 rounded-lg shadow-sm">
      <p className="text-xl font-medium m-2">Trending Coins (24h)</p>
      {topTrendingCoins.map((coin) => (
        <Coin
          iconUrl={coin.item.small}
          name={coin.item.name}
          symbol={coin.item.symbol}
          percent={coin.item.data.price_change_percentage_24h.usd?.toFixed(2)}
        />
      ))}
    </div>
  );
};
