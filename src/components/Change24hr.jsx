import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

export const Change24hr = ({ percent }) => {
  return (
    <div className="h-6 w-24">
      {percent > 0 ? (
        <div className="bg-green-100 px-2 flex rounded-md">
          <BiSolidUpArrow className="text-green-500 my-1" />
          <p className="text-green-500 pl-1">{percent}%</p>
        </div>
      ) : percent < 0 ? (
        <div className="bg-red-100 px-2 flex rounded-md">
          <BiSolidDownArrow className="text-red-500 my-1" />
          <p className="text-red-500">{percent}%</p>
        </div>
      ) : null}
    </div>
  );
};
