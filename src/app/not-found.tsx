import "@/app/styles/globals.css"

export default function Error() {
    return (
        <div className="customError">
            <h1 className="title">
                ERREUR 404
            </h1>
            <h2>
                La page demandée n'existe pas
            </h2>
        </div>
    )
}