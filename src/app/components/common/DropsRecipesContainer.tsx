import ResourceDrop from "@/app/types/Resource/ResourceDrop";
import CardDetailsType from "../card/CardDetailsType";
import StuffDrop from "@/app/types/Stuff/StuffDrop";
import "./common.css";

interface Props {
  drops: Array<ResourceDrop | StuffDrop>;
}

export default function DropsRecipesContainer({ drops }: Props) {
  return (
    <>
      <h2 className="titleDropMob">Drops</h2>
      <div className="mobDropsContainer">
        {drops &&
          drops.map((drop, index) => (
            <CardDetailsType key={index} item={drop} />
          ))}
      </div>
    </>
  );
}
