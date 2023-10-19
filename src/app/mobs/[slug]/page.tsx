import Image from "next/image";

interface Props {
    params : {
        slug : string
    }
}

export default function MobDetails({params} : Props) {

    return <p>Post: {params.slug}</p>
    
}