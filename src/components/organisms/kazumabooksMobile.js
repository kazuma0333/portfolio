import Books from "../../img/kazumabooks.jpg";
import "../css/organisms-css/kazumabooks.css";

export const KazumabooksMobile = () => {
    return(
        <>
        <div className="main-mobile">
            <img src={ Books } />
            <div className="bottom-mobile">
                <a className="bottom-left-mobile" href="https://kazumabooks.vercel.app/" target="_blank">↗︎</a>
                <p className="bottom-right-mobile"># 💸 🎨 💪🏻 ⛓ 📚</p>
            </div>
        </div>
        </>
    )
}