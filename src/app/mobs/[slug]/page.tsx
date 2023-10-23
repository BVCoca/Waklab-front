import Image from "next/image";
import { getMob } from "@/app/services/mob";
import "./mobDetails.css";
import Level from "@/app/components/common/Level";
import FamilyView from "@/app/components/common/FamilyView";
import ImageResizer from "@/app/components/common/ImageResizer";
import Header from "@/app/components/header/header";
import CardDetailsType from "@/app/components/card/CardDetailsType";
import DropsRecipesContainer from "@/app/components/common/DropsRecipesContainer";

interface Props {
  params: {
    slug: string;
  };
}

export default async function MobDetails({ params }: Props) {
  const mob = await getMob(params.slug);

  function calculatePercent(Rflat: number): number {
    const R = (1 - Math.pow(0.8, Rflat / 100)) * 100;
    return Math.floor(R);
  }

  function nFormatter(num: number, digits: number): string {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });

    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  if (!mob) {
    return <p>Monstre non trouvé</p>;
  }

  return (
    <div className="detailsContent">
      <Header small={true} />
      <div className="mobStatsContainer">
        <div className="imageMobContainer">
          <ImageResizer
            width={150}
            height={150}
            src={mob.imageUrl}
            alt={`Image du monstre ${mob.name}`}
          />
          <h3>{mob.name}</h3>
          <FamilyView family={mob.family} />
        </div>

        <div className="primaryStatsMobContainer">
          <div className="healthMobContainer">
            <div className="valueContainer">
              <div className="tooltip">
                <span className="tooltiptext">
                  {mob.hp.toLocaleString()} HP
                </span>
                <Image
                  src="/mobDetailsIcon/healthHearth.svg"
                  alt="Image de la santé du monstre"
                  width={100}
                  height={93}
                />
                <span id="valueHealth">{nFormatter(mob.hp, 0)}</span>
              </div>
            </div>
            <div className="actionMovementContainer">
              <div className="valueContainer">
                <Image
                  src="/mobDetailsIcon/actionstar.svg"
                  alt="Image de la santé du monstre"
                  width={58}
                  height={58}
                />
                <span id="valueAction">{mob.actionPoints}</span>
              </div>
              <div className="valueContainer">
                <Image
                  src="/mobDetailsIcon/movementsquare.svg"
                  alt="Image de la santé du monstre"
                  width={58}
                  height={58}
                />
                <span id="valueMovement">{mob.movementPoints}</span>
              </div>
            </div>
          </div>

          <div className="helpStatsMobContainer">
            <ul>
              <li className="lineValue">
                <Image
                  src="/mobDetailsIcon/iconIni.png"
                  alt="Icône Initiative"
                  width={27}
                  height={20}
                />
                <span>Initiative : </span>
                <span className="valueHelpStats">{mob.initiative}</span>
              </li>
              <li className="lineValue">
                <Image
                  src="/mobDetailsIcon/iconTac.png"
                  alt="Icône Tacle"
                  width={27}
                  height={20}
                />
                <span>Tacle : </span>
                <span className="valueHelpStats">{mob.tackle}</span>
              </li>
              <li className="lineValue">
                <Image
                  src="/mobDetailsIcon/iconEsq.png"
                  alt="Icône Esquive"
                  width={27}
                  height={20}
                />
                <span>Esquive : </span>
                <span className="valueHelpStats">{mob.dodge}</span>
              </li>
              <li className="lineValue">
                <Image
                  src="/mobDetailsIcon/iconPar.png"
                  alt="Icône Parade"
                  width={27}
                  height={20}
                />
                <span>Parade : </span>
                <span className="valueHelpStats">{mob.parry} %</span>
              </li>
              <li className="lineValue">
                <Image
                  src="/mobDetailsIcon/iconCc.png"
                  alt="Icône Coup Critique"
                  width={27}
                  height={20}
                />
                <span>Coup Critique : </span>
                <span className="valueHelpStats">{mob.criticalHit} %</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="secondaryStatsMobContainer">
          <div className="infoMobContainer">
            <div className="levelMobContainer">
              <Level level={[mob.levelMin, mob.levelMax]} isInCard={false} />
            </div>
            <div className="isCapturableMobContainer">
              {mob.isCapturable ? "Capturable" : "Non capturable"}
              {mob.isCapturable ? (
                <Image
                  src="/mobDetailsIcon/iconCapt.png"
                  alt="Icône monstre non capturable"
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src="/mobDetailsIcon/iconNoCapt.png"
                  alt="Icône monstre capturable"
                  width={16}
                  height={16}
                />
              )}
            </div>
          </div>
          <div className="tableStatsMobContainer">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Dégats</th>
                  <th>Résistances</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="typeTitleTable">
                    {" "}
                    <Image
                      src="/mobDetailsIcon/iconResW.png"
                      alt="Icône Coup Critique"
                      width={27}
                      height={27}
                    />
                    Eau
                  </td>
                  <td>{mob.attackWater}</td>
                  <td>
                    {calculatePercent(mob.resWater)} % ({mob.resWater})
                  </td>
                </tr>
                <tr>
                  <td className="typeTitleTable">
                    <Image
                      src="/mobDetailsIcon/iconResE.png"
                      alt="Icône Coup Critique"
                      width={27}
                      height={27}
                    />
                    Terre
                  </td>
                  <td>{mob.attackEarth}</td>
                  <td>
                    {calculatePercent(mob.resEarth)} % ({mob.resEarth})
                  </td>
                </tr>
                <tr>
                  <td className="typeTitleTable">
                    <Image
                      src="/mobDetailsIcon/iconResWi.png"
                      alt="Icône Coup Critique"
                      width={27}
                      height={27}
                    />
                    Air
                  </td>
                  <td>{mob.attackWind}</td>
                  <td>
                    {calculatePercent(mob.resWind)} % ({mob.resWind})
                  </td>
                </tr>
                <tr>
                  <td className="typeTitleTable">
                    <Image
                      src="/mobDetailsIcon/iconResF.png"
                      alt="Icône Coup Critique"
                      width={27}
                      height={27}
                    />
                    Feu
                  </td>
                  <td>{mob.attackFire}</td>
                  <td>
                    {calculatePercent(mob.resFire)} % ({mob.resFire})
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DropsRecipesContainer
        drops={[...mob.resourceDrops, ...mob.stuffDrops].sort(
          (a, b) => b.value - a.value
        )}
      />
    </div>
  );
}
