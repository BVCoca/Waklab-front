"use client";

import { useState } from "react";

interface stasisProps {
  stasisValues: number[];
  onStasisButtonClick: (stasisValue: number) => void;
}

export default function StasisBar({
  stasisValues,
  onStasisButtonClick,
}: stasisProps) {
  const [selectedStasisValue, setSelectedStasisValue] = useState(2);

  const handleStasisButtonClick = (stasisValue: any) => {
    setSelectedStasisValue(stasisValue.target.value);
    onStasisButtonClick(stasisValue.target.value);
  };

  return (
    <div className="stasisBar">
      <label>Stasis : {selectedStasisValue}</label>
      <div className="vertical-slider">
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={selectedStasisValue}
          onChange={handleStasisButtonClick}
          id="stasisSlider"
        />
        <div className="graduations">
          {stasisValues.map((value) => (
            <div className="graduation" key={value}>
              -
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
