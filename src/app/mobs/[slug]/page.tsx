import { getMob } from "@/app/services/mob";
import "./mobDetails.css";
import Header from "@/app/components/header/header";
import CardDetailsType from "@/app/components/card/CardDetailsType";
import { Metadata } from "next";
import DropsRecipesContainer from "@/app/components/common/DropsRecipesContainer";
import MobDetails from "@/app/components/mob/mobDetails/MobDetails";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mob = await getMob(params.slug);

  const description =
    mob.name +
    " - " +
    mob.hp +
    " PDV, " +
    mob.actionPoints +
    " PA, " +
    mob.movementPoints +
    " PM";

  return {
    title: mob.name,
    description: description,
    openGraph: {
      title: mob.name,
      description: description,
      images: {
        url: mob.imageUrl,
        width: 300,
        height: 300,
      },
      url: process.env.NEXT_PUBLIC_SITE_URL + "/mobs/" + mob.slug,
    },
  };
}

export default async function MobPage({ params }: Props) {
  const mob = await getMob(params.slug);

  return (
    <div className="detailsContent">
      <Header />
      <MobDetails mob={mob} />
    </div>
  );
}
