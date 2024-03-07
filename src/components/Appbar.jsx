import { NavButton } from "./NavButton";

export const Appbar = () => {
  return (
    <div className="flex justify-between shadow-md bg-white">
      <div>
        <img
          className="h-20 my-1 mx-10"
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt=""
        />
      </div>
      <div className="flex pr-10">
        <NavButton label={"Crypto Taxes"} />
        <NavButton label={"Free Tools"} />
        <NavButton label={"Resource Center"} />
        <button className="mx-2 bg-blue-500 px-10 py-1 my-5 text-white rounded-lg font-bold hover:bg-blue-600 ">
          Get Started
        </button>
      </div>
    </div>
  );
};
