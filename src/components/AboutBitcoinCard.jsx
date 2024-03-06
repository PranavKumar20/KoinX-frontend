import { IoArrowForwardOutline } from "react-icons/io5";

export const AboutBitcoinCard = ({ imageUrl, heading }) => {
  return (
    <div className="flex h-32 w-1/2 bg-blue-400 rounded-lg m-4">
      <div className="my-auto flex ml-2">
        <img className="h-28 rounded-lg mr-2" src={imageUrl} alt="image" />
        <div className="my-auto">
          <div className="flex my-2 font-medium w-3/4">
          <p className="text-xl text-white pl-3">{heading}</p>
          </div>
          <button className="bg-white rounded-lg px-4 py-1 ml-3 flex">
            Check Now
            <IoArrowForwardOutline className="my-auto mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
