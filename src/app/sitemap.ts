import { MetadataRoute } from "next";
import { fetchSlugs } from "./services/common";
import Slugs, { Slug } from "./types/Slug";

async function collectDataWithPagination(type : string) {
    let allData : Slug[] = [];
    let page = 1;
  
    while (true) {
      const data = await fetchSlugs(type, page)
  
      allData = allData.concat(data["hydra:member"]); 

      if (data["hydra:view"] === undefined || data["hydra:view"]["hydra:next"] === undefined) {
        break; 
      }

      page++;
    }
  
    return allData;
  }

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL: string = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

    let urls : MetadataRoute.Sitemap = [
        {
            url: BASE_URL
        },
    ]

    const TYPES : string[] = ['mobs','stuffs','resources','dungeons']

    TYPES.map((type : string) => {
        urls.push({
            url: `${BASE_URL}/${type}`
        })
    })

    const dungeon_slugs = await collectDataWithPagination('dungeon');

    const dungeons = dungeon_slugs.map((slug : Slug) => {
        return {
            url: `${BASE_URL}/dungeons/${slug.slug}`,
        };
    })

    const mob_slugs = await collectDataWithPagination('mobs');

    const mobs = mob_slugs.map((slug : Slug) => {
        return {
            url: `${BASE_URL}/mobs/${slug.slug}`,
        };
    })

    const stuff_slugs = await collectDataWithPagination('stuff');

    const stuffs = stuff_slugs.map((slug : Slug) => {
        return {
            url: `${BASE_URL}/stuffs/${slug.slug}`,
        };
    })

    const resource_slugs = await collectDataWithPagination('resource');

    const resources = resource_slugs.map((slug : Slug) => {
        return {
            url: `${BASE_URL}/resources/${slug.slug}`,
        };
    })


    return [...urls, ...mobs, ...resources, ...stuffs, ...dungeons];
}