import Header from "@/app/components/header/header";
import { getSubzone } from "@/app/services/zone";
import { Metadata } from "next";
import "./subzoneDetails.css"
import ImageWithFallback from "@/app/components/common/ImageWithFallback";
import Level from "@/app/components/common/Level";
import Resource from "@/app/types/Resource/Resource";
import Card from "@/app/components/card/Card";
import Dungeon from "@/app/types/Dungeon/Dungeon";
import FamilyMobs from "@/app/types/Mob/FamilyMobs";
import Mob from "@/app/types/Mob/Mob";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subzone = await getSubzone(params.slug);

  return {
    title: subzone.name,
    openGraph: {
      title: subzone.name,
      images: {
        url: subzone.imageUrl,
        width: 300,
        height: 300,
      },
      url: process.env.NEXT_PUBLIC_SITE_URL + "/subzones/" + subzone.slug,
    },
  };
}

export default async function SubzonePage({ params }: Props) {
  const subzone = await getSubzone(params.slug);

  return (
    <div className="detailsContent">
        <Header />
        <div className="headerDetails">
            <div className="blockCenter">
                <h1>{subzone.Zone.name} - {subzone.name}</h1>
                <ImageWithFallback src={subzone.imageUrl} width={500} height={300} alt="Carte"/>
            </div>
            <div className="levelContainer">
            <Level level={[subzone.levelMin, subzone.levelMax]} />
            </div>
        </div>
        { subzone.resources.length > 0 && (
            <div className="dropMobContainer">
                <h2 className="titleDropMob">Ressources de métiers</h2>
                <div className="cardDropContainer">
                    {subzone.resources.map((resource : Resource) => (
                        <Card key={`resource-${resource.slug}`} item={resource} />
                    ))}
                </div>
            </div>
        )}
        { subzone.dungeons.length > 0 && (
            <div className="dropMobContainer">
                <h2 className="titleDropMob">Donjons</h2>
                <div className="cardDropContainer">
                    {subzone.dungeons.map((dungeon : Dungeon) => (
                        <Card key={`dungeon-${dungeon.slug}`} item={dungeon} />
                    ))}
                </div>
            </div>
        )}
        { subzone.mobs.length > 0 && (
            <div className="dropMobContainer">
                <h2 className="titleDropMob">Monstres</h2>
                <div className="cardDropContainer">
                    {subzone.mobs.map((mob : FamilyMobs) => mob.Mobs.map((mob : Mob) => (
                        <Card key={`mob-${mob.slug}`} item={mob} />
                    )))}
                </div>
            </div>
        )}
    </div>
  );
}