"use client";

import StasisBar from "@/app/components/mob/stasis/stasisBar/stasisBar";
import MobSingle from "@/app/types/Mob/MobSingle";
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

  const stasisMultipliers: any = {
    1: {
      normal: { hpMultiplier: 0.7, attackMultiplier: 0.6, dropMultiplier: 0.6 },
      competitif: {
        hpMultiplier: 0.7,
        attackMultiplier: 0.6,
        dropMultiplier: 0.6,
      },
      bossUltime: {
        hpMultiplier: 0.7,
        attackMultiplier: 0.7,
        dropMultiplier: 0.6,
      },
    },
    2: {
      normal: { hpMultiplier: 1, attackMultiplier: 1, dropMultiplier: 1 },
      competitif: {
        hpMultiplier: 1,
        attackMultiplier: 1,
        dropMultiplier: 1,
      },
      bossUltime: {
        hpMultiplier: 1,
        attackMultiplier: 1,
        dropMultiplier: 1,
      },
    },
    3: {
      normal: { hpMultiplier: 1.4, attackMultiplier: 1.3, dropMultiplier: 1.2 },
      competitif: {
        hpMultiplier: 1.4,
        attackMultiplier: 1.3,
        dropMultiplier: 1.4,
      },
      bossUltime: {
        hpMultiplier: 1.6,
        attackMultiplier: 1.3,
        dropMultiplier: 1.4,
      },
    },
    4: {
      normal: { hpMultiplier: 2.1, attackMultiplier: 1.9, dropMultiplier: 1.6 },
      competitif: {
        hpMultiplier: 2.1,
        attackMultiplier: 1.9,
        dropMultiplier: 2.5,
      },
      bossUltime: {
        hpMultiplier: 2.4,
        attackMultiplier: 1.9,
        dropMultiplier: 2.5,
      },
    },
    5: {
      normal: { hpMultiplier: 3.1, attackMultiplier: 2, dropMultiplier: 1.88 },
      competitif: {
        hpMultiplier: 3.1,
        attackMultiplier: 2,
        dropMultiplier: 4,
      },
      bossUltime: {
        hpMultiplier: 3.6,
        attackMultiplier: 2,
        dropMultiplier: 4,
      },
    },
    6: {
      normal: { hpMultiplier: 4.4, attackMultiplier: 2.1, dropMultiplier: 2 },
      competitif: {
        hpMultiplier: 4.4,
        attackMultiplier: 2.1,
        dropMultiplier: 5.5,
      },
      bossUltime: {
        hpMultiplier: 5.2,
        attackMultiplier: 2.1,
        dropMultiplier: 5.5,
      },
    },
    7: {
      normal: { hpMultiplier: 6, attackMultiplier: 2.3, dropMultiplier: 2.05 },
      competitif: {
        hpMultiplier: 6,
        attackMultiplier: 2.3,
        dropMultiplier: 6,
      },
      bossUltime: {
        hpMultiplier: 7.4,
        attackMultiplier: 2.3,
        dropMultiplier: 6,
      },
    },
    8: {
      normal: {
        hpMultiplier: 6.6,
        attackMultiplier: 2.4,
        dropMultiplier: 2.1,
      },
      competitif: {
        hpMultiplier: 6.6,
        attackMultiplier: 2.4,
        dropMultiplier: 6.5,
      },
      bossUltime: {
        hpMultiplier: 8,
        attackMultiplier: 2.4,
        dropMultiplier: 6.5,
      },
    },
    9: {
      normal: {
        hpMultiplier: 8.8,
        attackMultiplier: 2.5,
        dropMultiplier: 2.15,
      },
      competitif: {
        hpMultiplier: 8.8,
        attackMultiplier: 2.5,
        dropMultiplier: 6.8,
      },
      bossUltime: {
        hpMultiplier: 10,
        attackMultiplier: 2.5,
        dropMultiplier: 6.8,
      },
    },
    10: {
      normal: {
        hpMultiplier: 11,
        attackMultiplier: 2.6,
        dropMultiplier: 2.2,
      },
      competitif: {
        hpMultiplier: 11,
        attackMultiplier: 2.6,
        dropMultiplier: 7.1,
      },
      bossUltime: {
        hpMultiplier: 13,
        attackMultiplier: 2.8,
        dropMultiplier: 7.1,
      },
    },
  };

  const onStasisButtonClick = (multiplier: number) => {
    setSelectedStasisMultiplier(multiplier);
  };

  useEffect(() => {
    if (selectedStasisMultiplier !== null) {
      if (isCompetitive && mob.family.name != "Boss Ultimes") {
        onChange(
          stasisMultipliers[selectedStasisMultiplier].competitif.hpMultiplier,
          stasisMultipliers[selectedStasisMultiplier].competitif
            .attackMultiplier,
          stasisMultipliers[selectedStasisMultiplier].competitif.dropMultiplier
        );
      } else if (!isCompetitive && mob.family.name != "Boss Ultimes") {
        onChange(
          stasisMultipliers[selectedStasisMultiplier].normal.hpMultiplier,
          stasisMultipliers[selectedStasisMultiplier].normal.attackMultiplier,
          stasisMultipliers[selectedStasisMultiplier].normal.dropMultiplier
        );
      } else if (!isCompetitive && mob.family.name == "Boss Ultimes") {
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
        stasisMultipliers={stasisValues}
        onStasisButtonClick={onStasisButtonClick}
      />

      {mob.family.name != "Boss Ultimes" ? (
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
