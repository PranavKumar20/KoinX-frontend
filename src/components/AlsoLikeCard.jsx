import { Change24hr2 } from "./Change24hr2";

export const AlsoLikeCard = ({ iconUrl, name, percent, price, graphUrl }) => {
  return (
    <div className="w-1/5 my-4 mx-1 border-2 rounded-lg h-40">
      <div className="flex ">
        <img className="h-8 m-2 rounded-full" src={iconUrl} alt="iconImage" />
        <p className="m-2">{name}</p>
        <div className="my-2">
          <Change24hr2 percent={percent} />
        </div>
      </div>
      <div>
        <p className="mx-2 font-medium text-lg">{price}</p>
      </div>
      <div>
        <img className="mx-auto" src={graphUrl} alt="sparkline" />
      </div>
    </div>
  );
};
