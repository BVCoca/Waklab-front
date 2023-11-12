import Mob from "@/app/types/Mob/Mob"
import Resource from "@/app/types/Resource/Resource"
import Stuff from "@/app/types/Stuff/Stuff"
import Card from "../card/Card"
import Dungeon from "@/app/types/Dungeon/Dungeon"
import { useInView } from "react-intersection-observer"
import { useEffect, useState, useRef } from "react"
import ArrowTop from "@/app/icons/homepageIcon/arrow_top.svg"

interface Props {
    resultsScroll : Array<Mob|Stuff|Resource|Dungeon>,
    onScrollEnd : () => void
}

export default function SearchInfiniteScroll({resultsScroll, onScrollEnd} : Props) {

    const { ref, inView } = useInView();

    const refDiv = useRef<null | HTMLDivElement>(null);
    const [displayArrow, setDisplayArrow] = useState(false)

    useEffect(() => {
        if(inView) {
            onScrollEnd()
            setDisplayArrow(true)
        }
    }, [inView, onScrollEnd])

    const handleClickTop = () => {
        if(refDiv && refDiv.current)
            refDiv.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id="cardList" ref={refDiv}>
            {resultsScroll && resultsScroll.map((result, index ) => {
                if(resultsScroll.length >= 5 && resultsScroll.length - 5 === index) {
                    return <Card key={index} item={result} forwardRef={ref}/>
                }
                return <Card key={index} item={result} />
            })}
            {displayArrow && <ArrowTop onClick={handleClickTop} id="backToTheTop" alt="Bouton vers le haut de page"/>}
        </div>
    )
}