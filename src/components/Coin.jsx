import { Change24hr } from "./Change24hr";

export const Coin = ({ iconUrl, name, symbol, percent }) => {
  return (
    <div className="flex justify-between m-2 py-1">
      <div className="flex">
        <img
          className="h-6 rounded-full w-6 mx-2 my-1"
          src={iconUrl}
          alt="icon"
        />
        <p className="mx-2 my-1">{name}</p>
        <p className="my-1">({symbol})</p>
      </div>
      <Change24hr percent={percent} />
    </div>
  );
};
