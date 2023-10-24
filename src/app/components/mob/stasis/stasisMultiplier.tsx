"use client";

import StasisBar from "@/app/components/mob/stasis/stasisBar/stasisBar";
import MobSingle from "@/app/types/Mob/MobSingle";
import { useState } from "react";

interface Props {
  mob: MobSingle;
  onChange: () => number;
}

export default function StasisMultiplier({ mob, onChange }: Props) {
  const stasisValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedStasisMultiplier, setSelectedStasisMultiplier] = useState<
    number | null
  >(null);

  const stasisMultipliers = {
    1: 0.7,
    2: 1,
    3: 1.4,
    4: 2.1,
    5: 3.1,
    6: 4.4,
    7: 6,
    8: 6.6,
    9: 8.8,
    10: 11,
  };

 

  const calculateModifiedHP = () => {
    if (selectedStasisMultiplier !== null) {
      mob.hp = Math.floor(mob.hp * selectedStasisMultiplier);
    }
    mob.hp = mob.hp;
  };

  onChange() {
    calculateModifiedHP();
  };

  const onStasisButtonClick = (multiplier: number) => {
    setSelectedStasisMultiplier(multiplier);
  };

  return (
    <>
      <StasisBar
        stasisValues={stasisValues}
        stasisMultipliers={stasisMultipliers}
        onStasisButtonClick={onStasisButtonClick}
      />
    </>
  );
}
