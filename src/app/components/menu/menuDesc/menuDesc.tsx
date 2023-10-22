import "../menu.css"

interface Props {
    descIcon : string
}

export default function MenuDesc({descIcon} : Props) {
    return (
        <div className="menuDesc">{descIcon}</div>
    )
}