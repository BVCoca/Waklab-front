import Recipe from "@/app/types/Recipe/Recipe"
import Image from "next/image"
import DropsRecipesContainer from "../common/DropsRecipesContainer"
import "./Recipes.css"

interface Props {
    recipes : Recipe[]
}

export default function Recipes({ recipes } : Props) {
    return recipes.length > 0 && (
        <div className="recipesContainer">
            <h2 className="titleBlock">Recettes</h2>
            { recipes.map((recipe : Recipe) => (
                <div key={`recipe-${recipe["@id"]}`} className="recipeContainer">
                    <div className="jobRecipe">
                        <Image src={recipe.job.icon} width={30} height={30} alt="" />
                        <h3>{recipe.job.name} - {recipe.job_level}</h3>
                    </div>
                    <DropsRecipesContainer
                        items={recipe.recipeIngredients}
                    />
                </div>
            ))}
        </div>
    )   
}