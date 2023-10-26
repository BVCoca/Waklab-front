import { useEffect, useState } from "react"

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
            <button className="selectedHeader" onClick={() => setIsOpen(!isOpen)}>{options.find((o) => o.value === currentValue.value)?.label}</button>
            {isOpen && options.map((o) => o.value !== currentValue.value && (
                <button className="selectedOption" key={o.value} onClick={() => handleOptionsChange(o)} >{o.label}</button>
            ))}
        </div>
    )
}