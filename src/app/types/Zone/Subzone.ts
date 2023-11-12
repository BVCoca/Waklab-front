import Resource from "./Resource"

export default interface Subzone {
    name: string;
    slug: string;
    levelMin: string;
    levelMax: string;
    mobsFamily: string;
    resourcesJobs: Record<string, Resource>;
    image: string;
}