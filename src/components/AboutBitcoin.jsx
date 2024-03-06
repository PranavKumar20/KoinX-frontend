import { AboutBitcoinCard } from "./AboutBitcoinCard";
export const AboutBitcoin = () => {
  return (
    <div className="bg-white my-2 mx-8 rounded-lg shadow-sm">
      <p className="text-2xl font-medium mx-4 my-2 pt-2">About Bitcoin</p>
      <p className="text-lg mx-4 my-2 font-medium">What is Bitcoin?</p>
      <p className="mx-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dicta
        dignissimos, doloremque, voluptatum omnis, ratione ipsa officiis earum
        aperiam dolor eligendi rerum unde delectus? Similique ipsum praesentium
        quidem voluptate ipsa hic quisquam, possimus vitae quis libero, autem,
        repellendus perspiciatis fuga maxime magni dolores atque culpa odit
        laudantium obcaecati maiores soluta repudiandae ea iure. Aliquam porro
        laborum voluptatem quod eius explicabo.
      </p>
      <hr className="mx-4 my-2" />
      <p className="text-lg mx-4 my-2 font-medium">
        Lorem ipsum dolor sit amet
      </p>
      <p className="mx-4 my-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eum
        modi dolor aliquid quae consectetur perferendis hic consequuntur, ipsa
        nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        omnis iste praesentium, labore odio soluta a velit numquam non
        excepturi, perspiciatis iure. Ratione, et veritatis, provident aperiam
        veniam voluptas sed praesentium deserunt accusantium repellendus
        excepturi explicabo voluptatem aliquid quia sint reprehenderit ipsa
        illum iure corrupti qui voluptatum nulla repudiandae quibusdam!
      </p>
      <p className="mx-4 my-1">
        dolor sit amet consectetur, adipisicing elit. Voluptates exercitationem
        magnam veniam perferendis. Magni quis, minus asperiores ipsa, placeat
        perspiciatis at itaque laudantium sint iusto ullam, culpa pariatur
        reiciendis! Laborum Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolorem minima culpa quam eveniet exercitationem cum iusto
        perferendis ex autem odio!
      </p>
      <p className="mx-4 my-1 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        illu Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        esse officiis. Blanditiis omnis voluptas, harum accusantium laboriosam,
        provident quis, aperiam itaque alias eligendi odio eum.
      </p>
      <hr className="mx-4 my-1" />
      <p className="text-lg font-medium mx-4 my-2">Already Holding Bitcoin?</p>
      <hr className="mx-4 my-1" />
      <div className="flex">
        <AboutBitcoinCard
          heading={"Calculate your Profit"}
          imageUrl={
            "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <AboutBitcoinCard
          heading={"Calculate your tax liability"}
          imageUrl={
            "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <p className="mx-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        voluptatum voluptatem reprehenderit rem quas quia vero deleniti facilis
        at obcaecati, vel, labore asperiores natus quis voluptatibus voluptate
        atque consequuntur impedit reiciendis exercitationem sapiente! Magnam
        facilis est laudantium velit, voluptate ea.
      </p>
    </div>
  );
};
