import Books from "../../img/kazumabooks.jpg";
import "../css/organisms-opacity-css/kazumabooks-opa.css";

export const KazumabooksOpa = () => {
    return(
        <>
        <div className="main-opa">
            <img src={ Books } />
            <div className="bottom-opa">
                <p className="bottom-left-opa">↗︎</p>
                <p className="bottom-right-opa"># 💸 🎨 💪🏻 ⛓ 📚</p>
            </div>
        </div>
        </>
    )
}