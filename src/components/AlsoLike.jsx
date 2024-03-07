import React, { useState, useEffect } from "react";
import { AlsoLikeCard } from "./AlsoLikeCard";

export const AlsoLike = () => {
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

        const topTrending = data.coins.slice(0, 5);
        setTopTrendingCoins(topTrending);
      }
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  const getRandomCoins = () => {
    const shuffledCoins = trendingCoins.sort(() => 0.5 - Math.random());
    const randomCoins = shuffledCoins.slice(0, 5);
    return randomCoins;
  };

  //   coins[0].item.symbol coins[0].item.data.price coins[0].item.data.sparkline coins[1].item.coin_id coins[0].item.data.price_change_percentage_24h.usd
  return (
    <div className="bg-white">
      <div>
        <p className="text-xl font-medium pt-10 px-4">You May Also Like</p>
        <div className="flex mx-4">
          {getRandomCoins().map((coin) => (
            <AlsoLikeCard
              key={coin.item.coin_id}
              iconUrl={coin.item.small}
              name={coin.item.symbol}
              percent={coin.item.data.price_change_percentage_24h.usd.toFixed(
                2
              )}
              price={coin.item.data.price}
              graphUrl={coin.item.data?.sparkline}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl font-medium px-4">Trending Coins</p>
        <div className="flex mx-4">
          {topTrendingCoins.map((coin) => (
            <AlsoLikeCard
              key={coin.item.coin_id}
              iconUrl={coin.item.small}
              name={coin.item.symbol}
              percent={coin.item.data.price_change_percentage_24h.usd?.toFixed(
                2
              )}
              price={coin.item.data.price}
              graphUrl={coin.item.data?.sparkline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
