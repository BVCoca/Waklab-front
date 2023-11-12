"use client"

import "../homepage.css"
import Link from "next/link"
import { fetchData } from "@/app/services/zone"
import { useEffect, useState } from "react";
import Zone from "@/app/types/Zone/Zone";
import Subzone from "@/app/types/Zone/Subzone";

interface Props {
  params: {
    slug: string;
  };
}

export default function ZoneDetails({ params }: Props) {

    const [zoneData, setZoneData] = useState<Zone | null>(null)

    const zone = params.slug

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const fetchedData = await fetchData(zone)
                setZoneData(fetchedData)
            } catch (error) {
                console.log(error)
            }
        };
        fetchDataFromApi()
    }, [])

    return (
        <div className="container">
           {zoneData && zoneData.subzones.map((subzone: Subzone, i: number) => (
                <Link 
                    key={i} 
                    href={`${zoneData.slug}/${subzone.slug}`}
                >
                    <div key={i} className="cardContainer">
                        <img src={subzone.image} alt="" className="cardImage"/>
                        <h1 className="cardName">{subzone.name}</h1>
                        <h2 className="cardLevels">Niveau {subzone.levelMin} à {subzone.levelMax}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}

