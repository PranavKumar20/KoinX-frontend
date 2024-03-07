export const SentimentCard = ({ iconUrl, heading, description, bgcol }) => {
  return (
    <div className={`rounded-lg p-4 mr-4 w-3/4 flex ${bgcol}`}>
      <div className="rounded-full h-12 w-32 bg-blue-500 p-2 mr-4 my-2">
        <img src={iconUrl} alt="Icon" className="w-8 h-8 m-auto" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{heading}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
