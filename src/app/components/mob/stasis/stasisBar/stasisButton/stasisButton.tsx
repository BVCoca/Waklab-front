import Image from "next/image";
import "../stasis.css";

interface Props {
  stasisValue: number;
  onClick: () => void;
  isSelected: boolean;
}

export default function stasisButton({ stasisValue, onClick }: Props) {
  const handlestasisClick = () => {
    onClick();
  };

  return (
    <button className="stasisButton" onClick={handlestasisClick}>
      <Image
        src="/mobDetailsIcon/iconStasisOrb.png"
        alt="Icône du bouton de stasis"
        width={40}
        height={40}
      />
      <div className="stasisValue">{stasisValue}</div>
    </button>
  );
}
