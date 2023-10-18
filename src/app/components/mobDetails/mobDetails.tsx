import Image from "next/image";

export default function MobDetails() {

    return (
        <div className="mobStatsContainer">
            <div className="imageMobContainer">
                <Image width={150} height={150} src="https://static.ankama.com/wakfu/portal/game/monster/200/100200039.w133h.png" alt="Image du monstre"/>
            </div>

            <div className="primaryStatsMobContainer">
                <div className="HealthMobContainer">

                </div>

                <div className="helpStatsMobContainer">

                </div>
            </div>

            <div className="secondaryStatsMobContainer">

            </div>

            <div className="infoMobContainer">
                <div className="levelMobContainer">

                </div>
                <div className="isCapturable MobContainer">

                </div>
            </div>
        </div>
    )
}