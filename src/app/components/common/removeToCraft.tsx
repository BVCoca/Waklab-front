"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import Cross from "/public/cross.svg"
import ResourceSingle from "@/app/types/Resource/ResourceSingle";

interface Props {
  item: StuffSingle | ResourceSingle
  recipeId : string
}

export default function RemoveButton({ item, recipeId }: Props) {

    const remove = () => {
        let isItemsToCraft = localStorage.getItem("itemsToCraft");
        let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];
  
        item.recipes = item.recipes.filter((recipe) => recipe["@id"] === recipeId) 

        if(itemsToCraft) {
            itemsToCraft.removeItem(item);
        }

        localStorage.setItem("itemsToCraft", JSON.stringify(itemsToCraft))
    };
  
    return (
      <button
        className="deleteButton"
        style={{ background: "none", border: "none" }}
        onClick={remove}
      >
        <Cross fill="#1B8684" width={40} height={40} />
      </button>
    );
  }