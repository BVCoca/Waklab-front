import Image from "next/image";

import "./coffee.css"

export default function Coffee() {
    return (
        <a
            className="buyButton"
            target="_blank"
            href="https://www.buymeacoffee.com/waklab"
        >
            <Image
                className="coffeeImage"
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
                width={10}
                height={0}
            />
            <span className="coffeeButtonText">Un café pour les devs ?</span>
        </a>
    );
}