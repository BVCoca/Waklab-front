import Image from "next/image";
import Header from "@/app/components/header/header";
import RarityView from "@/app/components/common/RarityView";
import Level from "@/app/components/common/Level";
import MobDropList from "@/app/components/mob/MobDropList";
import UsedInRecipe from "@/app/components/recipe/UsedInRecipe";
import { Metadata } from "next";
import Recipes from "@/app/components/recipe/Recipes";
import { getStuff } from "@/app/services/stuff";
import "./stuffDetails.css"
import { isWeapon } from "@/app/types/isType";
import stuffCaracteristic from "@/app/types/Stuff/StuffCaracteristic";
import ImageWithFallback from "@/app/components/common/ImageWithFallback";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params } : Props) : Promise<Metadata> {
  
  const stuff = await getStuff(params.slug);
  
  return {
    title: stuff.name,
    description : stuff.description,
    openGraph : {
      title : stuff.name,
      description : stuff.description,
      images : {
        url : stuff.imageUrl,
        width : 300,
        height : 300,
      },
      url : process.env.NEXT_PUBLIC_SITE_URL + "/stuffs/" + stuff.slug
    }
  }
}

export default async function StuffDetails({ params }: Props) {
  const stuff = await getStuff(params.slug);

  if (!stuff) {
    return <p>Stuff non trouvé</p>;
  }

  return (
    <div className="detailsContent">
      <Header small={true} />
      <div className="headerDetails">
        <div className="imageRarityContainer">
          <ImageWithFallback src={stuff.imageUrl} width={150} height={150} alt=""/>
          <RarityView rarity={stuff.rarity} />
        </div>
        <div className="blockCenter">
          <h1>{stuff.name}</h1>
          <p className="stuffDescription">{stuff.description}</p>
        </div>
        <div className="levelContainer">
          <Level level={[stuff.level]} />
        </div>
      </div>
      <h2 className="caracteristicTitle">Caractéristiques</h2>
      <div className="caracteristicDetails">
        {isWeapon(stuff) && 
          <div className="weaponDetails">
            <div className="weaponDetailsItem">
              <h4>Cout en PA : <span>{stuff.costPa}</span></h4>
              <Image
                  src="/mobDetailsIcon/actionstar.svg"
                  alt="Etoile"
                  width={22}
                  height={22}
                />
            </div>
            <div className="weaponDetailsItem">
              <h4>Portée : <span>{stuff.requiredPo }</span></h4>
              <Image
                  src="https://static.ankama.com/wakfu/ng/img/encyclo/ligne_vu.png"
                  alt="Oeil"
                  width={24}
                  height={24}
                />
            </div>
            <div className="weaponDetailsItem">
              <h4>Effets : <span>{stuff.effectValue} {stuff.effectType}</span></h4>
            </div>
            <div className="weaponDetailsItem">
              <h4>Effets critiques : <span>{stuff.criticalEffectValue} {stuff.effectType}</span></h4>
            </div>
          </div>
        }
        <div className="otherCaracteristicsContainer">
          {stuff.stuffCaracteristics.map((stuffCarac : stuffCaracteristic) =>
            <div className="caracContainer" key={stuffCarac["@id"]}>
              {stuffCarac.caracteristic.icon && <Image className="caracImg" alt="" src={stuffCarac.caracteristic.icon} width={20} height={20} />}
              <p className="caracLabel"><span>{stuffCarac.value}</span> {stuffCarac.caracteristic.name}</p>
            </div>
          )}
        </div>
      </div>
      <MobDropList drops={stuff.stuffDrops} />
      <Recipes recipes={stuff.recipes} />
      { stuff.recipeIngredients.length > 0 && <UsedInRecipe recipeIngredients={stuff.recipeIngredients} />}
    </div>
  );
}
