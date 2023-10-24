import ResourceDrop from "@/app/types/Resource/ResourceDrop";
import CardDetailsType from "../card/CardDetailsType";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import "./common.css";
import RecipeIngredientFromRecipe from "@/app/types/Recipe/RecipeIngredientFromRecipe";

interface Props {
  items: Array<ResourceDrop | StuffDrop | RecipeIngredientFromRecipe>;
}

export default function DropsRecipesContainer({ items }: Props) {

  return (
    <>
      <h2 className="titleDropMob">Drops</h2>
      <div className="mobDropsContainer">
        {items &&
          items.map((item, index) => (
            <CardDetailsType key={index} item={item} />
          ))}
      </div>
    </>
  );
}
