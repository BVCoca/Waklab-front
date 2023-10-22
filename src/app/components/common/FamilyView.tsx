import Family from "@/app/types/Mob/Family";
import "./common.css";
import FamilyIcon from "@/app/icons/commonIcon/iconFamily.svg"

interface Props {
  family: Family;
}

export default function FamilyView({ family }: Props) {
  return (
    <div className="typeContainer">
      <FamilyIcon
        width={30}
        height={30}
        alt="Types de monstres"
      />
      <h4 className="typeLabel">{family.name}</h4>
    </div>
  );
}
