import Books from "../../img/kazumabooks.jpg";
import "../css/organisms-css/kazumabooks.css";

export const Kazumabooks = () => {
    return(
        <>
        <div className="main">
            <img src={ Books } />
            <div className="bottom">
                <a className="bottom-left" href="https://kazumabooks.vercel.app/" target="_blank">↗︎</a>
                <p className="bottom-right"># 💸 🎨 💪🏻 ⛓ 📚</p>
            </div>
        </div>
        </>
    )
}