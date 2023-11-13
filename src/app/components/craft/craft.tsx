"use client"

import StuffSingle from "@/app/types/Stuff/StuffSingle";
import ResourceSingle from "@/app/types/Resource/ResourceSingle";
import "./craft.css"

export default function CraftComponent() {
    let isItemsToCraft = localStorage.getItem("itemsToCraft")
    let itemsToCraft = isItemsToCraft ? JSON.parse(isItemsToCraft) : [];

    return (
        <div>
            {itemsToCraft.map((item :StuffSingle | ResourceSingle) => {
             <div className="name">
                {item.name}
                {item["@type"]}
             </div>
            })}
        </div>
    )
}