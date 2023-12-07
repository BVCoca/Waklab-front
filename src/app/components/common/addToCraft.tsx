"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import Hammer from "/public/hammer.svg"
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import RecipeQty from "@/app/types/Recipe/RecipeQty";
import RecipeIngredientFromRecipeQty from "@/app/types/Recipe/RecipeIngredientFromRecipeQty";

interface Props {
  item: StuffSingle | ResourceSingle
  recipes: RecipeQty[]
  recipesIngredients: RecipeIngredientFromRecipeQty[]
  recipeId : string
}

export default function CraftingButton({ item, recipeId }: Props) {

    const [itemsToCraft, setItemsToCraft] = useState<any[]>([]);

    useEffect(() => {
      const storedItems = localStorage.getItem("itemsToCraft");
      if (storedItems) {
        setItemsToCraft(JSON.parse(storedItems));
      }
    }, []);

    const saved = () => {
      const isItemInStorage = itemsToCraft.some((craftItem) => {    
        return craftItem["@id"] === item["@id"] || craftItem.recipeId === recipeId;
      });
    
      if (!isItemInStorage) {
        const updatedItemsToCraft = [...itemsToCraft, { ...item, quantity: 1, recipeId }];
        setItemsToCraft(updatedItemsToCraft);
        localStorage.setItem("itemsToCraft", JSON.stringify(updatedItemsToCraft));
    
        toast(`${item.name} a été ajouté aux Crafts !`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: false,
          theme: "dark",
          type: "success"
        });
      } else {
        toast(`${item.name} est déjà présent dans les crafts !`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: false,
          theme: "dark",
          type: "error"
        });
      }
    }
  
    return (
      <button
        className="craftButton"
        style={{ background: "none", border: "none" }}
        onClick={() => {
          saved();
        }}
      >
        <Hammer fill="#1B8684" width={40} height={40} />
      </button>
    );
  }