"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import Hammer from "/public/hammer.svg"

export default function ButtonSaved({ stuff }: { stuff: StuffSingle }) {
    const saved = () => {
      let isStuffsToCraft = localStorage.getItem("stuffsToCraft");
      let stuffsToCraft = isStuffsToCraft ? JSON.parse(isStuffsToCraft) : [];
  
      stuffsToCraft.push(stuff);

      localStorage.setItem("stuffsToCraft", JSON.stringify(stuffsToCraft))
  
      console.log(stuffsToCraft);
    };
  
    return (
      <button
        className="craftButton"
        style={{ background: "none", border: "none" }}
        onClick={saved}
      >
        <Hammer fill="#1B8684" width={40} height={40} />
      </button>
    );
  }