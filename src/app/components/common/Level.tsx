import "./common.css"

interface Props {
    level : number[],
    isInCard? : boolean // Permet d'affiche Niv. ou Niveau
}

export default function Level({level, isInCard = true} : Props) {
    return (
        <h4 className="level">{isInCard ? 'Niv.' : 'Niveau'} {level.length > 1 ? `${level[0]} - ${level[1]}` : level[0]}</h4>
    )
}