import { FaPlus } from "react-icons/fa6";

export const Change24hr2 = ({ percent }) => {
  return (
    <div className="h-6 w-20">
      {percent > 0 ? (
        <div className="bg-green-100 px-2 flex rounded-md">
          <FaPlus className="text-green-500 my-1" />
          <p className="text-green-500 pl-1">{percent}%</p>
        </div>
      ) : percent < 0 ? (
        <div className="bg-red-100 px-2 flex rounded-md">
          <p className="text-red-500">{percent}%</p>
        </div>
      ) : null}
    </div>
  );
};
