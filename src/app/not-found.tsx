import "@/app/styles/globals.css";
import Image from "next/image";

export default function Error() {
  return (
    <div className="customError">
      <h1 className="title">ERREUR 404</h1>
      <h2>La page demandée n'existe pas</h2>
      <Image
        src="/errorIcon/error404Icon.png"
        width={150}
        height={150}
        alt="Image erreur 404"
      />
    </div>
  );
}
