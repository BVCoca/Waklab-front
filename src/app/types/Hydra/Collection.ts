import Base from "./Base";
import Pagination from "./Pagination";

/**
 * Représente un retour de plusieurs items de l'API
 */
export default interface Collection extends Base {
    'hydra:view' : Pagination
    'hydra:totalItems': number,
    'hydra:member': Array<any>
}