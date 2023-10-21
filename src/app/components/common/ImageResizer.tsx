import Image from "next/image"

interface Props {
    src : string,
    width : number,
    height : number,
    alt : string
}

export default function ImageResizer(props :any) {

    let url = props.src.replace('/.w\d+h\d+.png/i', `w${props.width}h${props.height}`);

    return (
        // Je désactive, car j'envoie tous les props
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image quality={100} {...props}/>
    )
}