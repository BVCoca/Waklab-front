import Mob from "./Mob/Mob";
import Resource from "./Resource/Resource";
import Stuff from "./Stuff/Stuff";

function isMob(item : Mob|Resource|Stuff): item is Mob {
    return item["@type"] === "Mobs";
}

function isResource(item : any): item is Resource {
    return item["@type"] === "Resource";
}

function isStuff(item : any): item is Stuff {
    return item["@type"] === "Stuff";
}

export {isMob, isResource, isStuff}