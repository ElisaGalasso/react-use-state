import languages from "../data/Languages";

export default function AccordionButton({ handleClick, currentAccordion }) {

    return (

        <div className="button-container">
            {languages.map(language =>

                <button onClick={handleClick} data-id={language.id}>
                    {language.title}
                </button>
            )}
        </div>
    )
}