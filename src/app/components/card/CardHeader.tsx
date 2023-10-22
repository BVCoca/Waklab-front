import Rarity from "@/app/types/Rarity";
import Level from "../common/Level";
import RarityView from "../common/RarityView";

interface Props {
  level: number[];
  rarity: Rarity | null;
  isSmall?: boolean;
}

// Affiche le bloc supérieur de la carte avec la rareté et le level
export default function CardHeader({ level, rarity, isSmall = false }: Props) {
  return (
    <div className="cardHeader">
      {rarity && <RarityView rarity={rarity} isSmall={isSmall} />}
      <Level level={level} />
    </div>
  );
}
