import { AboutBitcoin } from "../components/AboutBitcoin";
import { AlsoLike } from "../components/AlsoLike";
import { Appbar } from "../components/Appbar";
import { ChartView } from "../components/ChartView";
import { GetStarted } from "../components/GetStarted";
import { MiddleButtons } from "../components/MiddleButtons";
import PerformanceSection from "../components/PerformanceSection";
import { Sentiment } from "../components/Sentiment";
import { Team } from "../components/Team";
import { Tokenomics } from "../components/Tokenomics";
import { Traverser } from "../components/Traverser";
import { TrendingCoins } from "../components/TrendingCoins";

export const KoinX = () => {
  return (
    <div>
      <Appbar />
      <Traverser />
      <div className="lg:flex lg:ml-14">
        <div className="lg:w-2/3">
          <ChartView />
          <MiddleButtons />
          <PerformanceSection />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className=" lg:w-1/4">
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
      <AlsoLike />
    </div>
  );
};