import languages from "../data/Languages"

export default function AccordionCard({ currentAccordion }) {

    return (

        <>
            {languages.map(language =>
                currentAccordion == language.id && (
                    <div className="card" key={language.id}>
                        <div className="card-header">{language.title}</div>
                        <div className="card-body">{language.description}</div>
                    </div>
                )
            )}
        </>

    )
}