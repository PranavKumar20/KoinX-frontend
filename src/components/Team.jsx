import { TeamCard } from "./TeamCard";

export const Team = () => {
  return (
    <div className="rounded-lg  my-2 mx-8 shadow-sm bg-white">
      <div className="m-4 font-medium text-xl pt-2">Team</div>
      <div className="m-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam enim
        animi dolor dolorum. Sapiente, sequi ullam reprehenderit vitae tempore
        quas aut nihil voluptatum quis veniam adipisci perspiciatis
        necessitatibus sunt iste.
      </div>
      <div className="m-4 pb-4">
        <TeamCard
          imgUrl={
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"john smith"}
          designation={"Designation here"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
          }
        />
        <TeamCard
          imgUrl={
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"john smith"}
          designation={"Designation here"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
          }
        />
        <TeamCard
          imgUrl={
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          name={"john smith"}
          designation={"Designation here"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
          }
        />
      </div>
    </div>
  );
};
