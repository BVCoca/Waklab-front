import "../../dungeons/[slug]/dungeonDetails.css";
import Image from "next/image";
import Level from "@/app/components/common/Level";
import DungeonSingle from "@/app/types/Dungeon/DungeonSingle";
import React from "react";
import LongCard from "../card/LongCard";
import CrownIcon from "@/app/icons/crown.svg"
import CardDetailsType from "../card/CardDetailsType";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import "@/app/components/common/common.css";
import ResourceDrop from "@/app/types/Resource/ResourceDrop";

interface Props {
  dungeon: DungeonSingle;
}

export default function DungeonDetails({ dungeon }: Props) {
  let IconPlayer = "/dungeonsIcon/joueur.png";
  let IconRoom: string;

  if (dungeon.room_count === 2) {
    IconRoom = "/dungeonsIcon/tour2s.png";
  } else if (dungeon.room_count === 3) {
    IconRoom = "/dungeonsIcon/tour3s.png";
  } else {
    IconRoom = "/dungeonsIcon/tour4s.png";
  }

  // Séparation des drops en resource et stuff
  let allMobs = [...dungeon.Mobs, dungeon.Boss]
  let stuffDrops : any = [];
  let resourceDrops : any = [];

  allMobs.forEach((mob) => {
    stuffDrops.push(...mob.stuffDrops)
    resourceDrops.push(...mob.resourceDrops)
  });

  return (
    <div className="detailsContent">
      <div className="headerDetails">
        <Image className="imageContainer" src={dungeon.imageUrl} width={150} height={150} alt="" />
        <div className="blockCenter">
          <h1>{dungeon.name}</h1>
          <div className="dungeonMaxPlayer">
            <p className="dungeonMaxPlayerText">Nombre de joueurs max : </p>
            <p className="dungeonMaxPlayerNumber">{dungeon.max_player}</p>
            <Image
              className="dungeonMaxPlayerImage"
              src={IconPlayer}
              width={35}
              height={35}
              alt="personnes"
            />
          </div>
          <div className="dungeonRoomCount">
            <p className="dungeonRoomCountText">Nombre de salles : </p>
            <p className="dungeonRoomCountNumber">{dungeon.room_count}</p>
            <Image
              className="dungeonRoomCountImage"
              src={IconRoom}
              width={20}
              height={30}
              alt="salles"
            />
          </div>
        </div>
        <div className="levelContainer">
          <Level level={[dungeon.level]} />
        </div>
      </div>
      <div className="MobsContainer">
        <h2 className="titleMob">Monstres du donjon</h2>
        <div className="cardMobContainer">
          {dungeon.Mobs.map((mob) => <LongCard key={mob["@id"]} item={mob} />)}
          <LongCard item={dungeon.Boss} value={<CrownIcon width={40} height={60} color="#FFD700" />}/>
        </div>
      </div>
      <h2 className="titleMob">Equipement dropable dans le donjon</h2>
      <div className="MobsContainer">
        <div className="cardMobContainer">
          {stuffDrops.sort((a: StuffDrop, b: StuffDrop) => b.value - a.value ).map((drop : StuffDrop) => <CardDetailsType key={drop["@id"]} item={drop} theme="dark"/>)}
        </div>
      </div>
      <h2 className="titleMob">Ressources dropable dans le donjon</h2>
      <div className="MobsContainer">
        <div className="cardMobContainer">
          {resourceDrops.sort((a: StuffDrop, b: StuffDrop) => b.value - a.value ).map((drop : ResourceDrop) => <CardDetailsType key={drop["@id"]} item={drop} theme="dark"/>)}
        </div>
      </div>
    </div>
  );
}
