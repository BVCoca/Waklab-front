import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function ImageResizer(props: any) {
  let url = props.src.replace("/.wd+h.png/i", `.w${300}h.png`);

  return (
    // Je désactive, car j'envoie tous les props
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image quality={100} src={url} {...props} />
  );
}
