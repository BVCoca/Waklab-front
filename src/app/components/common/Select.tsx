import { useEffect, useState } from "react"
import ChevronIcon from "@/app/icons/chevron.svg"

interface Props {
    options : Option[],
    onChange : (value : Option) => void,
    selectedValue :any
}

interface Option {
    label : string,
    value : any
}

export default function Select({options = [], onChange} : Props) {
  
    const [currentValue, setCurrentValue] = useState<Option>(options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        onChange(currentValue.value)
    }, [currentValue])

    const handleOptionsChange = (option : Option) => {
        setCurrentValue(option)
        setIsOpen(false)
    }

    return (
        <div className="selectContainer">
            <button className="selectedHeader" onClick={() => setIsOpen(!isOpen)}>
                <p>{options.find((o) => o.value === currentValue.value)?.label}</p>
                <ChevronIcon className={ isOpen ? "active" : "inactive"} width={30} height={30}/>
            </button>
            <div className={ isOpen ? "optionContainer active" : "optionContainer inactive"}>
                {isOpen && options.map((o) => o.value !== currentValue.value && (
                    <button className={isOpen ? "selectedOption active" : "selectedOption inactive"} key={o.value} onClick={() => handleOptionsChange(o)} >{o.label}</button>
                ))}
            </div>
        </div>
    )
}