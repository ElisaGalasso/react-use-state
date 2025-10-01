import { useState } from "react"
import languages from "../data/Languages";

export default function AppAccordion() {

    const [currentAccordion, setCurrentAccordion] = useState(1)

    function handleClick(e) {
        console.log('Clicked');
        const currentClickedLanguage = Number(e.target.getAttribute('data-id'))
        setCurrentAccordion(currentClickedLanguage)

    }

    return (

        <div className="languages">
            {languages.map(language =>
                <div className="language" key={language.id}>
                    <button onClick={handleClick} data-id={language.id}>{language.title}</button>
                    {
                        currentAccordion == language.id &&
                        <>
                            <div className="card-header">
                                {language.title}
                            </div>
                            <div className="card-body">
                                {language.description}
                            </div>
                        </>
                    }
                </div>
            )}

        </div>
    )
}