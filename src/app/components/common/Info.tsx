"use client"

import { useState } from "react"
import ModalInfo from "./Modal"
import InfoIcon from "@/app/icons/commonIcon/info.svg"

export default function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
            <InfoIcon id="info" alt="Page Info" onClick={openModal}/>
            {isOpen && <ModalInfo/>}
        </>
    )
}