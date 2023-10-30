import { getDungeon } from "@/app/services/dungeon";
import "./dungeonDetails.css";
import Header from "@/app/components/header/header";
import { Metadata } from "next";
import DungeonDetails from "@/app/components/dungeon/dungeonDetails";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dungeon = await getDungeon(params.slug);

  return {
    title: dungeon.name,
    openGraph: {
      title: dungeon.name,
      images: {
        url: dungeon.imageUrl,
        width: 300,
        height: 300,
      },
      url: process.env.NEXT_PUBLIC_SITE_URL + "/dungeons/" + dungeon.slug,
    },
  };
}

export default async function DungeonPage({ params }: Props) {
  const dungeon = await getDungeon(params.slug);

  return (
    <div className="detailsContent">
      <Header />
      <DungeonDetails dungeon={dungeon} />
    </div>
  );
}