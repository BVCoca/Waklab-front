import MobSingle from "@/app/types/Mob/MobSingle";
import Image from "next/image";
import "./family.css";

interface Props {
  mob: MobSingle;
  pathImage: string;
}

export default function Family({ mob, pathImage }: Props) {
  return (
    <div className="family">
      <Image src={pathImage} alt="Type de l'entité" width={30} height={30} />
      <p>{mob.family ? mob.family.name : "Inconnu"}</p>
    </div>
  );
}
