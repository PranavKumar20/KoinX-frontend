import { FaInfoCircle } from "react-icons/fa";
import { SentimentCard } from "./SentimentCard";
import { SentimentVisual } from "./SentimentVisual";

export const Sentiment = () => {
  const percentages = [
    { text: "Buy", percent: 76 },
    { text: "Hold", percent: 8 },
    { text: "Sell", percent: 16 },
  ];
  return (
    <div className="bg-white mx-8 px-4 rounded-lg shadow-sm">
      <p className="text-xl font-medium my-1">Sentiment</p>
      <p className="flex text-lg font-medium">
        Key Events
        <FaInfoCircle className="my-2 mx-1 text-base text-gray-500" />
      </p>
      {/* <p>hello</p> */}
      <div className="flex py-2">
        <SentimentCard
          iconUrl={"https://cdn-icons-png.freepik.com/256/81/81460.png"}
          heading={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iure in debitis natus assumenda numquam, aliquid consequuntur nisi quia repellat nostrum hic voluptatum? Voluptate, eum porro? Est delectus pariatur unde"
          }
          bgcol={"bg-blue-100"}
        />
        <SentimentCard
          iconUrl={
            "https://cdn-icons-png.freepik.com/256/11073/11073398.png?ga=GA1.1.489436236.1709749053&"
          }
          heading={"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente iure in debitis natus assumenda numquam, aliquid consequuntur nisi quia repellat nostrum hic voluptatum? Voluptate, eum porro? Est delectus pariatur unde"
          }
          bgcol={"bg-green-100"}
        />
      </div>
      <p className="flex text-lg font-medium">
        Analyst Estimates
        <FaInfoCircle className="my-2 mx-1 text-base text-gray-500" />
      </p>
      <div className="p-4">
        <SentimentVisual number={"76%"} percentages={percentages} />
      </div>
    </div>
  );
};
