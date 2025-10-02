import languages from "../data/Languages";

export default function AccordionButton({ handleClick, currentAccordion }) {

    return (

        <div className="button-container">
            {languages.map(language =>

                <button key={language.id} onClick={handleClick} data-id={language.id}
                    className={currentAccordion == language.id ? "button active" : "button"}>
                    {language.title}
                </button>
            )}
        </div>
    )
}