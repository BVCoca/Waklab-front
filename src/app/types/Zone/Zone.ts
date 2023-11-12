import Subzone from "./Subzone"

export default interface Zone {
  name: string;
  slug: string;
  levelMin: string;
  levelMax: string;
  image: string;
  subzones: Subzone[];
}