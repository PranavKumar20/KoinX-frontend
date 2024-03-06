export const TeamCard = ({ imgUrl, name, designation, description }) => {
  return (
    <div className="bg-blue-100 flex rounded-lg my-4">
      <div className="my-2 mx-5 w-64">
        <img className="h-24 rounded-lg" src={imgUrl} alt="image" />
        <p className="text-lg text-center font-medium">{name}</p>
        <p className="text-sm text-center text-gray-500">{designation}</p>
      </div>
      <div className="my-5">
        <p>{description}</p>
      </div>
    </div>
  );
};
