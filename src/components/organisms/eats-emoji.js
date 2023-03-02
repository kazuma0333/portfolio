import Eats from "../../img/eats-emoji.jpg";
import Eats163 from "../../img/eats-emoji163.jpg";
import "../css/organisms-css/eats-emoji.css";

export const EatsEmoji = () => {
    return(
        <>
        <div className="eats">
                <img src={ Eats }  className="eats-img" />
                <img src={ Eats163 } className="eats-img163" />
                <div className="imgEats">
                    <a className="imgEats-left" href="https://eats-emoji.vercel.app/" target="_blank">↗︎</a>
                </div>
            </div>
        </>
    )
}