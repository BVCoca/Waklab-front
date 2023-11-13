import Image from "next/image";
import { getResource } from "@/app/services/resource";
import "./resourceDetails.css";
import Header from "@/app/components/header/header";
import RarityView from "@/app/components/common/RarityView";
import Level from "@/app/components/common/Level";
import MobDropList from "@/app/components/mob/MobDropList";
import UsedInRecipe from "@/app/components/recipe/UsedInRecipe";
import { Metadata } from "next";
import Recipes from "@/app/components/recipe/Recipes";
import React from "react";
import ImageWithFallback from "@/app/components/common/ImageWithFallback";

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

  const renderHTML = (rawHTML: string) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

  if (!resource) {
    return <p>Ressource non trouvé</p>;
  }

  return (
    <div className="detailsContent">
      <Header small={true} />
      <div className="headerDetails">
        <div className="imageRarityContainer">
          <ImageWithFallback src={resource.imageUrl} width={150} height={150} alt=""/>
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
      {resource.sublimation && (
        <div className="subliContainer">
          <h2>Sublimation</h2>
          <div className="subliHeader">
            <div className="subliRow">
              <h4>Chasse</h4>
              <h4>Effets</h4>
              <h4>Obtention</h4>
            </div>
            <div className="subliRow">
              <div className="chasseContainer">
                <Image src={`https://methodwakfu.com/wp-content/uploads/2020/04/chasse_${resource.sublimation.first_chasse}_xs.png`} alt={resource.sublimation.first_chasse} width={40} height={40}/>
                <Image src={`https://methodwakfu.com/wp-content/uploads/2020/04/chasse_${resource.sublimation.second_chasse}_xs.png`} alt={resource.sublimation.second_chasse} width={40} height={40}/>
                <Image src={`https://methodwakfu.com/wp-content/uploads/2020/04/chasse_${resource.sublimation.second_chasse}_xs.png`} alt={resource.sublimation.second_chasse} width={40} height={40}/>
              </div>
              {renderHTML(resource.sublimation.effect)}
              <p>{resource.sublimation.obtention !== undefined && resource.sublimation.obtention}</p>
            </div>
          </div>
        </div>
      )}
      <MobDropList drops={resource.resourceDrops} />
      <Recipes recipes={resource.recipes} item={resource}/>
      { resource.recipeIngredients.length > 0 && <UsedInRecipe recipeIngredients={resource.recipeIngredients} />}
    </div>
  );
}
