import { AboutBitcoin } from "./components/AboutBitcoin";
import { Appbar } from "./components/Appbar";
import { GetStarted } from "./components/GetStarted";
import { Team } from "./components/Team";
import { Tokenomics } from "./components/Tokenomics";
import { Traverser } from "./components/Traverser";

function App() {
  return (
    <div className="bg-gray-200">
      <Appbar />
      <Traverser />
      <div className="flex">
        <div className="w-3/4">
      <AboutBitcoin />
      <Tokenomics />
      <Team />
        </div>
        <div className="w-1/4">
      <GetStarted />
        </div>
      </div>
    </div>
  );
}

export default App;
