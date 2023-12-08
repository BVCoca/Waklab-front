import Recipe from "@/app/types/Recipe/Recipe"
import Image from "next/image"
import DropsRecipesContainer from "../common/DropsRecipesContainer"
import CraftingButton from "../common/craftingButton"
import "./Recipes.css"
import StuffSingle from "@/app/types/Stuff/StuffSingle"
import ResourceSingle from "@/app/types/Resource/ResourceSingle"

interface Props {
    recipes : Recipe[],
    item: StuffSingle | ResourceSingle
}

export default function Recipes({ recipes, item } : Props) {
    return recipes.length > 0 && (
        <div className="recipesContainer">
            <h2 className="titleBlock">Recettes</h2>
            {recipes.map((recipe : Recipe) => (
                <div key={`recipe-${recipe["@id"]}`} className="recipeContainer">
                    <div className="jobRecipe">
                        <Image src={recipe.job.icon} width={30} height={30} alt="" />
                        <h3>{recipe.job.name} - {recipe.job_level}</h3>
                        <CraftingButton item={item} recipeId={recipe["@id"]}/>
                    </div>
                    <DropsRecipesContainer
                        items={recipe.recipeIngredients.sort((a,b) => b.quantity - a.quantity)}
                    />
                </div>
            ))}
        </div>
    )   
}