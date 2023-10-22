import Image from "next/image";
import { getResource } from "@/app/services/resource";
import "./resourceDetails.css";
import Header from "@/app/components/header/header";
import RarityView from "@/app/components/common/RarityView";
import Level from "@/app/components/common/Level";
import MobDropList from "@/app/components/mob/MobDropList";

interface Props {
  params: {
    slug: string;
  };
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
    </div>
  );
}
