"use client"

import "../homepage.css"
/* import { fetchSubData } from "@/app/services/zone" */
import { useEffect, useState } from "react";
import Subzone from "@/app/types/Zone/Subzone";

interface Props {
  params: {
    subslug: string;
  };
}

export default function SubzoneDetails({ params }: Props) {

    const [subzoneData, setSubzoneData] = useState<Subzone | null>(null)

    const subzone = params.subslug

    /* useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const fetchedData = await fetchSubData(subzone)
                console.log('data in component', fetchedData)
                setSubzoneData(fetchedData)
            } catch (error) {
                console.log(error)
            }
        };
        fetchDataFromApi()
    }, []) */

    return (
        <div className="container">
           Test
        </div>
    )
}
