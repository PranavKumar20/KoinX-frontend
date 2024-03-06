import { FinalChart } from "./FinalChart";
export const Tokenomics = () => {
  return (
    <div className="bg-white mx-8 mb-2 pb-4 rounded-lg shadow-sm">
      <p className="text-2xl m-4 pt-2 font-medium">Tekonomics</p>
      <p className="m-4 font-medium text-lg">Initial Distribution</p>
      <div className="flex">
        <FinalChart />
        <div className="flex-col my-auto">
          <div className="flex">
            <li className="text-red-500"></li>
            <div className="text-black">Lorem ips</div>
          </div>
          <div className="flex">
            <li className="text-orange-500"></li>
            <div className="text-black">Lorem ips</div>
          </div>
        </div>
      </div>
      <p className="m-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        quo. Quod molestiae eos velit beatae explicabo iusto aperiam quas! Nulla
        iste natus quam molestiae voluptatibus esse atque cumque ad, aut iure?
        Praesentium cupiditate veritatis repellendus minima, natus rerum
        laudantium voluptatem voluptates soluta esse et iusto totam tempore
        tenetur dignissimos modi non! Inventore magnam at assumenda! Molestias
        voluptatibus amet tenetur quas.
      </p>
    </div>
  );
};
