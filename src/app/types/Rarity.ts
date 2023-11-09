export default interface Rarity {
    name : string,
    icon : string,
    value : number
}

export interface RarityAggregate extends Rarity {
    count : number
}
