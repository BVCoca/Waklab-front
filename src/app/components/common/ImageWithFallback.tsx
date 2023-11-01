"use client"

import Image from "next/image";
import { useState } from "react";

export default function ImageWithFallback(props: any) {
  const { src, ...rest } = props;
  const [imgSrc, setImgSrc] = useState<string>(src);
  

  return (
    // Je désactive, car j'envoie tous les props
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      quality={100}
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc("/errorIcon/error404Icon.png");
      }}
    />
  );
}
