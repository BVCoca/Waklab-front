import Warning from "@/app/icons/commonIcon/warning.svg"
import Link from "next/link"

interface Props {
    setOpenModalInfo: any,
    setOpenModalReport: any
}

export default function ModalInfo({setOpenModalInfo, setOpenModalReport} : Props) {

    function openModalReport() {
        setOpenModalReport(true)
        setOpenModalInfo(false) 
    }

    function closeModal() {
        setOpenModalInfo(false)
    }

    return (
        <div id="modalContainer">
            <div id="textModalContainer">
                <div id="titleModal"><Warning id="emojiModal" alt="Emoji attention"/><h2 id="h2Modal">Attention : En cours de développement</h2></div>
                <p>Ceci est un prototype destiné à vous donner un aperçu de ce à quoi un projet comme Waklab pourrait ressembler. <br/>
                    Nous sommes actuellement en train de travailler dur pour créer une expérience exceptionnelle. <br/>
                    Votre patience et votre soutien sont grandement appréciés pendant cette phase de développement. <br/>
                    Restez à l&apos;écoute pour les mises à jour à venir !
                </p>
            </div>
            <div id="linkModalContainer">
                <button onClick={openModalReport} className="linkModal">Report un bug</button>
                <Link href={"/notices"} onClick={closeModal} className="linkModal">Mentions Légales</Link>
            </div>
        </div>
    )
}