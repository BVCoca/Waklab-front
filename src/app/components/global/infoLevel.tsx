interface Props {
  firstLevel: number;
  secondLevel?: number;
}

export default function InfoLevel({ firstLevel, secondLevel }: Props) {
  return (
    <div className="infoLevel">
      <p>
        {secondLevel
          ? `Niveau ${firstLevel} - ${secondLevel}`
          : `Niveau ${firstLevel}`}
      </p>
    </div>
  );
}
