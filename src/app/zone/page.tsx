"use client"

import "../styles/globals.css"
import "./homepage.css"
import { fetchDatas } from "@/app/services/zone"
import { useEffect, useState } from "react"
import Link from "next/link"
import Zone from "../types/Zone/Zone"

export default function Homepage() {

    const [zonesData, setZonesData] = useState<Zone[] | null>(null)

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const fetchedData = await fetchDatas()
                setZonesData(fetchedData.zones)
            } catch (error) {
                console.log(error)
            }
        };
        fetchDataFromApi()
    }, [])

    return (
        <div className="container">
            {zonesData && zonesData.map((zone: Zone, i: number) => (
                <Link 
                    key={i} 
                    href={`zone/${zone.slug}`}
                >
                    <div key={i} className="cardContainer">
                        <img src={zone.image} alt="" className="cardImage"/>
                        <h1 className="cardName">{zone.name}</h1>
                        <h2 className="cardLevels">Niveau {zone.levelMin} à {zone.levelMax}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

