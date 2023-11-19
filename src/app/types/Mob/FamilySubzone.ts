import Subzone from "../Zone/Subzone";
import Family from "./Family";

export default interface FamilySubzone extends Family {
    subzones : Subzone[]
}