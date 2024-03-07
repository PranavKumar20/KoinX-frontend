import React, { useState } from "react";
import { MidButton } from "./MidButton";

export const MiddleButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="mx-2 my-4">
      <div className="flex py-1">
        <MidButton
          label={"Overview"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"Fundamentals"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"News Insights"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"Sentiments"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"Team"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"Technicals"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <MidButton
          label={"Tokenomics"}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
      </div>
      <hr className="mx-6 border-gray-300" />
    </div>
  );
};
