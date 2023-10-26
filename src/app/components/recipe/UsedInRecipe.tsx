'use client'

import Job from "@/app/types/Recipe/Job";
import RecipeFromRecipeIngredient from "@/app/types/Recipe/RecipeFromRecipeIngredient";
import RecipeIngredient from "@/app/types/Recipe/RecipeIngredient"
import { useEffect, useState } from "react";
import "./UsedInRecipe.css"
import Image from "next/image";
import LongCard from "../card/LongCard";
import Recipe from "@/app/types/Recipe/Recipe";
import Resource from "@/app/types/Resource/Resource";
import Stuff from "@/app/types/Stuff/Stuff";
import Select from "../common/Select";

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
        setIngredients( sortOptions[selectedSort].callBack(grouped))
        setActiveTab(tmp_job[0]["@id"])
    }, [])

    // Au changement de tab, on change le contenu du tab
    useEffect(() => {
        setCurrentIngredients(ingredients[activeTab])
    }, [activeTab])

    // Truc de tri
    const sort = (ingredientsToSort :any, compare : (a : Resource|Stuff|undefined, b : Resource|Stuff|undefined) => number) : any => { 
        Object.keys(ingredientsToSort).forEach((key : string) => {
            ingredientsToSort[key].sort((a : RecipeFromRecipeIngredient, b : RecipeFromRecipeIngredient) => {

                const entityA = a.resource ?? a.stuff
                const entityB = b.resource ?? b.stuff

                return compare(entityA, entityB)
            })
        })

        return ingredientsToSort
    }

    const sortByLevelAsc = (ingredientsToSort : any) => {
        return sort(ingredientsToSort, (a : Resource|Stuff|undefined,  b: Resource|Stuff|undefined) : number => {
            return (a?.level ?? 0) - (b?.level ?? 0)
        })
    }

    const sortByLevelDesc = (ingredientsToSort : any) => {
        return sort(ingredientsToSort, (a : Resource|Stuff|undefined,  b: Resource|Stuff|undefined) : number => {
            return (b?.level ?? 0) - (a?.level ?? 0)
        })
    }

    const sortByRarityAsc = (ingredientsToSort : any) => {
        return sort(ingredientsToSort, (a : Resource|Stuff|undefined,  b: Resource|Stuff|undefined) : number => {
            return (a?.rarity.value ?? 0) - (b?.rarity.value ?? 0)
        })
    }

    const sortByRarityDesc = (ingredientsToSort : any) => {
        return sort(ingredientsToSort, (a : Resource|Stuff|undefined,  b: Resource|Stuff|undefined) : number => {
            return (b?.rarity.value ?? 0) - (a?.rarity.value ?? 0)
        })
    }

    // Liste les différents type de tri
    const sortOptions = [
        {
            'label' : "Trier par niveau croissant",
            'value' : 0,
            'callBack' : sortByLevelAsc
        },
        {
            'label' : "Trier par niveau décroissant",
            'value' : 1,
            'callBack' : sortByLevelDesc
        },
        {
            'label' : "Trier du moins rare au plus rare",
            'value' : 2,
            'callBack' : sortByRarityAsc
        },
        {
            'label' : "Trier du plus rare au moins rare",
            'value' : 3,
            'callBack' : sortByRarityDesc
        },
    ]

    const handleSortSelected = (e : any) => {
        console.log(e)
        setSelectedSort(e)
    }

    const [selectedSort, setSelectedSort] = useState<number>(0);

    useEffect(() => {
        if(Object.keys(ingredients).length > 0)
        {
            sortOptions[selectedSort].callBack(ingredients)
            setCurrentIngredients([...ingredients[activeTab]])
        }
    }, [selectedSort])

    return activeTab !== '' && (
        <div className="recipeIngredientContainer">
            <div className="recipeIngredientHeader">
                <h2 className="titleRecipeIngredient">Utilisée dans les recettes</h2>
                {/* <select className="sortSelect" onChange={handleSortSelected}>
                    {sortOptions && sortOptions.map((sort, key) => (
                        <option key={`sort-${key}`} value={key} selected={key === selectedSort}>{sort.label}</option>
                    ))}
                </select> */}
                <div className="selectSort">
                    <Select selectedValue={selectedSort} onChange={handleSortSelected} options={sortOptions} />
                </div>
            </div>
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
                    {currentIngredients && currentIngredients.map((item : any) => <LongCard theme="light" key={item["@id"]} item={item.stuff ?? item.resource} value={
                        <p className="jobLevel">Craft Lvl. {item.job_level}</p>
                    }/>)}
                </div>
            </div>
        </div>
    )
}