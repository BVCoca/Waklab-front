import Image from "next/image";
import { getResource } from "@/app/services/resource";
import "./resourceDetails.css";
import Header from "@/app/components/header/header";
import RarityView from "@/app/components/common/RarityView";
import Level from "@/app/components/common/Level";
import MobDropList from "@/app/components/mob/MobDropList";
import UsedInRecipe from "@/app/components/recipe/UsedInRecipe";
import { Metadata } from "next";
import Recipe from "@/app/types/Recipe/Recipe";
import DropsRecipesContainer from "@/app/components/common/DropsRecipesContainer";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params } : Props) : Promise<Metadata> {
  
  const resource = await getResource(params.slug);
  
  return {
    title: resource.name,
    description : resource.description,
    openGraph : {
      title : resource.name,
      description : resource.description,
      images : {
        url : resource.imageUrl,
        width : 300,
        height : 300,
      },
      url : process.env.NEXT_PUBLIC_SITE_URL + "/resources/" + resource.slug
    }
  }
}

export default async function ResourceDetails({ params }: Props) {
  const resource = await getResource(params.slug);

  if (!resource) {
    return <p>Ressource non trouvé</p>;
  }

  return (
    <div className="detailsContent">
      <Header small={true} />
      <div className="headerDetails">
        <div className="imageRarityContainer">
          <Image src={resource.imageUrl} width={150} height={150} alt=""/>
          <RarityView rarity={resource.rarity} />
        </div>
        <div className="blockCenter">
          <h1>{resource.name}</h1>
          <p className="resourceDescription">{resource.description}</p>
        </div>
        <div className="levelContainer">
          <Level level={[resource.level]} />
        </div>
      </div>
      <MobDropList drops={resource.resourceDrops} />
      <h2 className="titleBlock">Recettes</h2>
      {resource.recipes.length > 0 && resource.recipes.map((recipe : Recipe) => (
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
      { resource.recipeIngredients.length > 0 && <UsedInRecipe recipeIngredients={resource.recipeIngredients} />}
    </div>
  );
}
