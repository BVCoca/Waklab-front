'use client'

import Job from "@/app/types/Recipe/Job";
import RecipeFromRecipeIngredient from "@/app/types/Recipe/RecipeFromRecipeIngredient";
import RecipeIngredient from "@/app/types/Recipe/RecipeIngredient"
import { useEffect, useState } from "react";
import "./UsedInRecipe.css"
import Image from "next/image";
import LongCard from "../card/LongCard";

interface Props {
    recipeIngredients : RecipeIngredient[]
}

export default function UsedInRecipe({recipeIngredients} : Props) {

    // Liste les jobs
    const [jobs, setJobs] = useState<Job[]>([]);

    // Liste de tous les ingrédients
    const [ingredients , setIngredients] = useState<any>([])

    // Liste les ingrédient actuellement affichés
    const [currentIngredients, setCurrentIngredients] = useState<any>([])

    // Id du métier de la tabActive
    const [activeTab ,setActiveTab] = useState<string>('');

    useEffect(() => {
        // Regroupement des recettes par métier
        let tmp_job : Job[] = [];

        const grouped = recipeIngredients.reduce((group : {[key : string] : RecipeFromRecipeIngredient[]}, ingredient : RecipeIngredient) => {

            if(!tmp_job.find((j) => j["@id"] === ingredient.recipe.job["@id"])) {
                tmp_job.push(ingredient.recipe.job)
            }

            if (!group[ingredient.recipe.job["@id"]]) {
                group[ingredient.recipe.job["@id"]] = [];
            }
            group[ingredient.recipe.job["@id"]].push(ingredient.recipe);
            return group;
        }, {})

        setJobs(tmp_job)
        setIngredients(grouped)
        setActiveTab(tmp_job[0]["@id"])
    }, [])

    // Au changement de tab, on change le contenu du tab
    useEffect(() => {
        setCurrentIngredients(ingredients[activeTab])
    }, [activeTab])

    return activeTab !== '' && (
        <div className="recipeIngredientContainer">
            <h2 className="titleRecipeIngredient">Utilisée dans les recettes</h2>
            <div className="tabContainer">
                <ul className="headTabContainer">
                    {jobs && jobs.map(job => (
                        <li
                            className={job["@id"] === activeTab ? 'tabButton active' : 'tabButton'}
                            key={`job-${job["@id"]}`}
                            onClick={() => setActiveTab(job["@id"])}
                        >
                            <Image alt="" src={job.icon} width={20} height={20}/>
                            <p>{job.name}</p>
                        </li>
                    ))}
                </ul>
                <div className="tabContent">
                    {currentIngredients && currentIngredients.map((item : any) => <LongCard theme="light" key={item["@id"]} item={item.stuff ?? item.resource} />)}
                </div>
            </div>
        </div>
    )
}