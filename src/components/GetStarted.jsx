import { IoArrowForwardOutline } from "react-icons/io5";

export const GetStarted = () => {
  return (
    <div className="bg-blue-700 h-96 mx-2 my-2 rounded-lg shadow-sm text-white">
      <div className="flex w-52 mx-auto">
      <p className="text-lg mt-2 mx-auto font-medium text-center font-medium">Get Started with KoinX for FREE</p>
      </div>   
      <div className="flex w-80 mx-auto">
      <p className="mx-auto p-4 text-center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      </div> 
      <img className="h-28 m-auto rounded-lg"
        src="https://img.freepik.com/premium-vector/woman-standing-front-vending-machine-that-says-welcome-world_220346-8442.jpg?size=626&ext=jpg&ga=GA1.1.1459033380.1709729220&semt=ais"
        alt="image"
      />
      <div className="flex">
      <button className="mx-auto my-2 border-2 flex p-2 text-black bg-white rounded-lg font-medium">Get Started for FREE
      <IoArrowForwardOutline className="my-auto mx-2" />
      </button>
      </div>
    </div>
  );
};
