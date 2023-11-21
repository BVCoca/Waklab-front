"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import Hammer from "/public/hammer.svg"
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import { useState } from "react";
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

    const [isInStorage, setIsInStorage] = useState<boolean>()

    const saved = () => {
      let isItemsToCraft = localStorage.getItem("itemsToCraft");
      let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

      if (item.recipes = item.recipes.filter((recipe) => recipe["@id"] === recipeId,)) {
        setIsInStorage(true)
        if (!isInStorage) {
          itemsToCraft.push({...item, quantity: 1});
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
          return
        }
      }
  
      localStorage.setItem("itemsToCraft", JSON.stringify(itemsToCraft))
    };
  
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