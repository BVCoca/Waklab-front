import { headers } from 'next/headers'
import ArrowIcon from "@/app/icons/arrow.svg";
import "./redirectArrow.css";
import Link from 'next/link';
import { getMob } from '@/app/services/mob';
import { getStuff } from '@/app/services/stuff';
import { getResource } from '@/app/services/resource';

export default async function RedirectArrow() {
  const headersList = headers()

  const domain = headersList.get('host') || "";
  const fullUrl = headersList.get('referer') || "";
  const [,last_page] = fullUrl.match( new RegExp(`https?:\/\/${domain}(.*)`))||[];

  const current_page = headersList.get('next-url');

  let display_link = false;
  let message = 'Retour'

  // On affiche le lien si l'url précédent et l'url courant sont différent et que referer est différent de nul
  if(last_page && current_page && last_page !== current_page) {
    display_link = true;

    let splitted_url = last_page.split('/');

    let type: string = splitted_url[1]
    let slug: string = splitted_url[2]

    if(!slug) {
      // On personnalise le message en fonction de la ou l'on vient
      if(type === 'mobs') {
        message = "Retour sur la recherche de monstres"
      } else if(type === 'stuffs') {
        message = "Retour sur la recherche d'équipements"
      } else if(type === 'resources') {
        message = "Retour sur la recherche de ressources"
      } else if(type === '/') {
        message = "Retour sur la page d'accueil"
      }
    }
    else {
      let item;

      if(type === 'mobs') {
        item = await getMob(slug)
      } else if(type === 'stuffs') {
        item = await getStuff(slug)
      } else if(type === 'resources') {
        item = await getResource(slug)
      }

      if(item) {
        message = `Retour sur le ${item.name}`
      }
    }
  }

  return display_link && (
    <Link href={last_page} className="containerRedirectBack">
        <ArrowIcon
          alt="Flèche Retour en arrière"
          width={50}
          height={40}
        />
        <h3 className='redirectLabel'>{message}</h3>
    </Link>
  );
}
