"use client";

import StasisBar from "@/app/components/mob/stasis/stasisBar/StasisBar";
import MobSingle from "@/app/types/Mob/MobSingle";
import StasisMultipliers from "./StasisMultipliers.json";
import "./stasis.css";
import { useEffect, useState } from "react";

interface Props {
  mob: MobSingle;
  onChange: (
    hpMultiplier: number,
    attackMultiplier: number,
    dropMultiplier: number
  ) => MobSingle;
}

export default function StasisMultiplier({ onChange, mob }: Props) {
  const stasisValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedStasisMultiplier, setSelectedStasisMultiplier] =
    useState<number>(2);
  const [isCompetitive, setIsCompetitive] = useState<boolean>(false);

  const stasisMultipliers: any = StasisMultipliers;

  const onStasisButtonClick = (multiplier: number) => {
    setSelectedStasisMultiplier(multiplier);
  };

  useEffect(() => {
    if (selectedStasisMultiplier !== null) {
      if (isCompetitive && mob.family && mob.family.name != "Boss Ultimes") {
        onChange(
          stasisMultipliers[selectedStasisMultiplier].competitif.hpMultiplier,
          stasisMultipliers[selectedStasisMultiplier].competitif
            .attackMultiplier,
          stasisMultipliers[selectedStasisMultiplier].competitif.dropMultiplier
        );
      } else if (
        !isCompetitive &&
        mob.family &&
        mob.family.name != "Boss Ultimes"
      ) {
        onChange(
          stasisMultipliers[selectedStasisMultiplier].normal.hpMultiplier,
          stasisMultipliers[selectedStasisMultiplier].normal.attackMultiplier,
          stasisMultipliers[selectedStasisMultiplier].normal.dropMultiplier
        );
      } else if (
        !isCompetitive &&
        mob.family &&
        mob.family.name == "Boss Ultimes"
      ) {
        onChange(
          stasisMultipliers[selectedStasisMultiplier].bossUltime.hpMultiplier,
          stasisMultipliers[selectedStasisMultiplier].bossUltime
            .attackMultiplier,
          stasisMultipliers[selectedStasisMultiplier].bossUltime.dropMultiplier
        );
      }
    }
  }, [selectedStasisMultiplier, isCompetitive]);

  const handleChange = () => {
    setIsCompetitive(!isCompetitive);
  };

  return (
    <>
      <StasisBar
        stasisValues={stasisValues}
        onStasisButtonClick={onStasisButtonClick}
      />

      {mob.family && mob.family.name != "Boss Ultimes" ? (
        <div>
          <label>Compétitif :</label>
          <input
            type="checkbox"
            checked={isCompetitive}
            onChange={handleChange}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
