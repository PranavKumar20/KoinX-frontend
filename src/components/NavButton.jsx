export const NavButton = ({ label }) => {
  return (
    <div>
      <button className="my-6 mx-4 font-medium rounded-lg px-2 py-2 hover:bg-gray-200">
        {label}
      </button>
    </div>
  );
};
