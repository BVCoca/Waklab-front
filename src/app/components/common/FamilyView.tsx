import Family from "@/app/types/Mob/Family";
import Image from "next/image";
import "./common.css";

interface Props {
  family: Family;
}

export default function FamilyView({ family }: Props) {
  return (
    <div className="typeContainer">
      <Image
        src={"/commonIcon/iconFamily.svg"}
        width={30}
        height={30}
        alt="Types de monstres"
      />
      <h4 className="typeLabel">{family.name}</h4>
    </div>
  );
}
