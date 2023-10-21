import Base from "./Base";

export default interface Pagination extends Base {
    "hydra:first": string,
    "hydra:last": string,
    "hydra:previous": string|undefined,
    "hydra:next": string|undefined
}