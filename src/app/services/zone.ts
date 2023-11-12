import Zone from "@/app/types/Zone/Zone";
import Subzone from "@/app/types/Zone/Subzone";

export async function fetchDatas() {

    try {
        const res = await fetch("/datas.json")
        if (!res.ok) {
            console.log('Response not OK:', res.status, res.statusText);
        }
        const data = await res.json()
        return data
    } catch (err) {
        console.log("err", err)
    }
}

export async function fetchData(zoneSlug: string) {
    try {
        const res = await fetch("/datas.json")
        if (!res.ok) {
            console.log('Response not OK:', res.status, res.statusText);
        }
        const data = await res.json()
        return data.zones.find((zone: Zone) => zone.slug === zoneSlug)
    } catch (err) {
        console.log("err", err)
    }
}

/* export async function fetchSubData(subzoneSlug: string) {
    try {
        const res = await fetch("/datas.json")
        if (!res.ok) {
            console.log('Response not OK:', res.status, res.statusText);
        }
        const data = await res.json()
        return data.zones.find((subzone: Subzone) => subzone.slug === subzoneSlug)
    } catch (err) {
        console.log("err", err)
    }
} */



