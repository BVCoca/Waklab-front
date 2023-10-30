import "../../dungeons/[slug]/dungeonDetails.css";
import Image from "next/image";
import Level from "@/app/components/common/Level";
import DungeonSingle from "@/app/types/Dungeon/DungeonSingle";
import React from "react";

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

  return (
    <div className="detailsContent">
      <div className="headerDetails">
        <div className="imageContainer">
          <Image src={dungeon.imageUrl} width={150} height={150} alt="" />
        </div>
        <div className="blockCenter">
          <h1>{dungeon.name}</h1>
          <div className="dungeonMaxPlayer">
            <p className="dungeonMaxPlayerText">Nombre de joueurs max: </p>
            <p className="dungeonMaxPlayerNumber">{dungeon.max_player}</p>
            <Image
              className="dungeonMaxPlayerImage"
              src={IconPlayer}
              width={35}
              height={35}
              alt=""
            />
          </div>
          <div className="dungeonRoomCount">
            <p className="dungeonRoomCountText">Nombre de salles: </p>
            <p className="dungeonRoomCountNumber">{dungeon.room_count}</p>
            <Image
              className="dungeonRoomCountImage"
              src={IconRoom}
              width={20}
              height={30}
              alt=""
            />
          </div>
        </div>
        <div className="levelContainer">
          <Level level={[dungeon.level]} />
        </div>
      </div>
    </div>
  );
}
