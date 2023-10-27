"use client";
import StasisButton from "./stasisButton/stasisButton";
import { useState, useEffect } from "react";

interface stasisProps {
  stasisValues: number[];
  stasisMultipliers: { [key: number]: number };
  onStasisButtonClick: (stasisValue: number) => void;
}

export default function stasisBar({
  stasisValues,
  stasisMultipliers,
  onStasisButtonClick,
}: stasisProps) {
  const [selectedStasisValue, setSelectedStasisValue] = useState(1);

  const handleStasisButtonClick = (stasisValue: number) => {
    const multiplier = stasisMultipliers[stasisValue];
    setSelectedStasisValue(stasisValue);
    onStasisButtonClick(multiplier);
  };

  return (
    <div className="stasisBar">
      {stasisValues.map((stasisValue: number) => (
        <StasisButton
          key={stasisValue}
          stasisValue={stasisValue}
          onClick={() => handleStasisButtonClick(stasisValue)}
          isSelected={stasisValue === selectedStasisValue}
        />
      ))}
    </div>
  );
}
