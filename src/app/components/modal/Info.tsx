"use client"

import { useState } from "react"
import ModalInfo from "./ModalInfo"
import InfoIcon from "@/app/icons/commonIcon/info.svg"
import FormBug from "@/app/components/modal/FormBug"
import { useOutsideClick } from "../hooks/useOutsideClick"

export default function Info() {

    const [openModalInfo, setOpenModalInfo] = useState(false);
    const [openModalReport, setOpenModalReport] = useState(false)

    const handleOpenModalInfo = () => {
        if (openModalInfo) {
            setOpenModalInfo(false);
        } else {
            setOpenModalInfo(true);
        }
    };

    const ref = useOutsideClick(() => {
        setOpenModalInfo(false)
    });

    return (
        <div ref={ref}>
            <InfoIcon id="info" alt="Page Info" onClick={handleOpenModalInfo}/>
            {openModalInfo && <ModalInfo setOpenModalInfo={setOpenModalInfo} setOpenModalReport={setOpenModalReport}/>}
            {openModalReport && <FormBug setOpenModalReport={setOpenModalReport}/>}
        </div>
    )
}