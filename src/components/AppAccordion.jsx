import { useState } from "react"
import languages from "../data/Languages";
import AccordionButton from "./AccordionButton";
import AccordionCard from "./AccordionCard";

export default function AppAccordion() {

    const [currentAccordion, setCurrentAccordion] = useState(1)

    function handleClick(e) {
        console.log('Clicked');
        const currentClickedLanguage = Number(e.target.getAttribute('data-id'))
        setCurrentAccordion(currentClickedLanguage)

    }

    return (

        <div className="languages">
            <AccordionButton currentAccordion={currentAccordion}
                handleClick={handleClick}>

            </AccordionButton>
            <AccordionCard currentAccordion={currentAccordion}>

            </AccordionCard>

        </div>
    )
}